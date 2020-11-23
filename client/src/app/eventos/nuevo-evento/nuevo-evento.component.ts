import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Direccion } from 'src/app/privado/usuario/usuario.model';
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

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private mensajeErroresService: MensajesErroresService,
    private eventoService: EventoService
  ) {}

  ngOnInit(): void {
    this.crearFormularioNuevoEvento();
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
  
    let tipo = this.formularioNuevoEvento.get('tipo').value;
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    
    let evento = {
      titulo: this.formularioNuevoEvento.get('titulo').value,
      descripcion: this.formularioNuevoEvento.get('descripcion').value,
      categoria: tipo._id,
      precio: this.formularioNuevoEvento.get('precio').value,
      fecha: this.formularioNuevoEvento.get('fecha').value,
      direccion: this.formularioNuevoEvento.get('direccion').value,
      uid: usuario._id    
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
}
