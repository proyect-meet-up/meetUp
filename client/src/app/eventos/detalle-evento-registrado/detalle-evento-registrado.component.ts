import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { botonState } from '@shared/componentes/animations/animation';
import { Params } from '@angular/router';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-detalle-evento-registrado',
  templateUrl: './detalle-evento-registrado.component.html',
  styleUrls: ['./detalle-evento-registrado.component.scss'],
  animations: [ botonState ],
})
export class DetalleEventoRegistradoComponent implements OnInit {
  state: string = 'inactivo';
  expanded: boolean = false;
  mostrarBotonGuardar: boolean = false;
  idEvento: string;
  direccionParaActualizar;
  direccionHaSidoActualicada: boolean = false;
  usuarioId: string;

  evento: Evento;
  formularioActualizarEvento: FormGroup;
  @ViewChild('text', { static: true }) formularioBoton: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private render: Renderer2,
    private eventosService: EventoService
  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe((param: Params) => {
          this.eventosService.obtenerEvento(param['evento'])
            .subscribe((evento: Evento) => {
              this.evento = evento;
              if ( this.evento ) {      
                this.idEvento = this.evento._id;   
                this.usuarioId = this.evento.usuario._id;
             
                this.crearFormulario();
              }
            })
      })
  }

  actualizarEvento() {    
    this.formularioActualizarEvento.enable();   
    // this.render.setProperty(this.formularioBoton.nativeElement, 'textContent','Actualizar datos');
   
    this.mostrarBotonGuardar = true;    

  }

  enviarDatos() {   
  
    if(this.direccionHaSidoActualicada) {
      this.evento = {       
        ...this.formularioActualizarEvento.value,
        direccion: this.direccionParaActualizar,
        usuario: this.usuarioId
      }    
    } else {
      let { direccion } = this.evento;
      this.evento = {        
        ...this.formularioActualizarEvento.value,
        direccion,
        usuario: this.usuarioId
      }     
    }    
    this.eventosService.actualizarEvento(this.idEvento, this.evento).subscribe(datos => {
      console.log("HA FUNCIONADOOO", datos)
    }) 
  }


  crearFormulario() {
    console.log(this.evento);
    this.formularioActualizarEvento = this.fb.group({
      titulo: [this.evento ? this.evento.titulo : '', [Validators.required]],
      descripcion: [
        this.evento ? this.evento.descripcion : '',
        [Validators.required],
      ],
      fecha: [
        this.evento ? this.evento.fecha : '',
        [Validators.required],
      ],
      usuario: [this.evento ? this.evento.usuario.nombre : ''],
    });

    this.setDisableCamposFormulario(this.formularioActualizarEvento.controls);
  }

  setDisableCamposFormulario(...campos) {
    let [propiedadesControls] = campos;

    for (const control in propiedadesControls) {
      if (!control.includes('telefono')) {
        this.formularioActualizarEvento.get(control).disable();
      }
    }
  }

  expandirPanelDireccion() {
    this.state = this.state === 'activo' ? 'inactivo' : 'activo';
    this.expanded = !this.expanded;
  }

  direccionActualizada($event: FormGroup) {

    this.direccionHaSidoActualicada = true;
     this.direccionParaActualizar = { ...$event.value };    
  
    this.evento = {
      ...this.formularioActualizarEvento.value,
      direccion: this.direccionParaActualizar
    }


  }
}
