import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '@shared/componentes/services/snackbar.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Direccion, Usuario } from 'src/app/privado/usuario/usuario.model';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { Categoria } from '../categoria.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss'],
})
export class NuevoEventoComponent implements OnInit {
  formularioNuevoEvento: FormGroup;
  categorias: Categoria[] = [];
  usuario: Usuario;
  sub: Subscription;
  checked: boolean;
  hoy: string | Date = new Date(Date.now());

  get valorPrecioChecked() {
    return this.checked;
  }

  constructor(
    private fb: FormBuilder,
    private mensajeErroresService: MensajesErroresService,
    private eventoService: EventoService,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearFormularioNuevoEvento();
    this.sub = this.authService.usuario$.subscribe(
      (data) => (this.usuario = data)
    );
  }

  crearFormularioNuevoEvento() {
    this.formularioNuevoEvento = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: [this.obtenerCategorias(), Validators.required],
      precio: [''],
      fecha: [this.hoy, Validators.required],
      direccion: ['', Validators.required],
    });
  }

  obtenerMensajeError(campo: string): string {
    return this.mensajeErroresService.obtenerMensajeError(
      this.formularioNuevoEvento,
      campo
    );
  }

  noEsCampoValido(campo: string) {
    return this.mensajeErroresService.noEsCampoValido(
      this.formularioNuevoEvento,
      campo
    );
  }

  crearNuevoEvento() {
    let { tipo, ...rest } = this.formularioNuevoEvento.value;

    const evento = {
      ...rest,
      categoria: tipo['_id'],
      uid: this.usuario._id,
    };

    this.eventoService.crearEvento(evento).subscribe(() => {
      this.snackbarService.mostrar(`Enhorabuena ${this.usuario.nombre} acabas de crear un nuevo evento`);
      this.eventoService.obtenerTodosEventos();
      setTimeout(() => {
        this.router.navigate(['privado'])
      }, 4000);
    });
  }

  nuevaDireccion(formularioDireccion: FormGroup) {
    if (formularioDireccion.valid) {
      this.formularioNuevoEvento
        .get('direccion')
        .setValue(formularioDireccion.value);
    } else {
      this.formularioNuevoEvento.get('direccion').setErrors({
        noValidoDireccion: true,
      });
    }
  }

  obtenerCategorias() {
    this.eventoService.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }

  observandoCambioCheck() {
    this.cambioValidaciones();
  }

  cambioValidaciones() {
    if (this.valorPrecioChecked) {
      this.formularioNuevoEvento.controls['precio'].setValidators([
        Validators.required,
      ]);
    } else {
      this.formularioNuevoEvento.controls['precio'].clearValidators();
    }
    this.formularioNuevoEvento.get('precio').updateValueAndValidity();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
