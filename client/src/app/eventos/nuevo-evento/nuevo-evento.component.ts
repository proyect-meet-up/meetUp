import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private mensajeErroresService: MensajesErroresService,
    private eventoService: EventoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.crearFormularioNuevoEvento();
    this.sub = this.authService.usuario$.subscribe( data => this.usuario = data);
    // let saludo = this.authService.token;
    // console.log(saludo)
  }

  crearFormularioNuevoEvento() {
    this.formularioNuevoEvento = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo:[this.obtenerCategorias(), Validators.required],
      precio: [0, Validators.required],
      fecha: [Date.now(), Validators.required],
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

    let { tipo , ...rest } = this.formularioNuevoEvento.value;

    const evento = {
      ...rest,
      categoria: tipo['_id'],
      uid: this.usuario._id
    }

    this.eventoService.crearEvento(evento).subscribe( data => {
      console.log(data)
    },(error) => {
      console.log("el error es: ", error)
    })

}

  nuevaDireccion(event: Direccion) {
    this.formularioNuevoEvento.get('direccion').setValue(event);
  }

  obtenerCategorias() {
    this.eventoService.getCategorias()
      .subscribe( (data: Categoria[]) => {
        this.categorias = data;
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
