import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { botonState } from '@shared/componentes/animations/botonState.animation';

@Component({
  selector: 'app-detalle-evento-registrado',
  templateUrl: './detalle-evento-registrado.component.html',
  styleUrls: ['./detalle-evento-registrado.component.scss'],
  animations: [botonState],
})
export class DetalleEventoRegistradoComponent implements OnInit {
  state: string = 'inactivo';
  expanded: boolean = false;

  evento: any;
  formularioActualizarEvento: FormGroup;
  @ViewChild('text', { static: true }) formularioBoton: ElementRef;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private render: Renderer2
  ) {
    this.evento = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  actualizarEvento() {
    this.formularioActualizarEvento.enable();
    this.render.setProperty(
      this.formularioBoton.nativeElement,
      'textContent',
      'Actualizar datos'
    );
    console.log(this.formularioActualizarEvento.value);
  }

  crearFormulario() {
    this.formularioActualizarEvento = this.fb.group({
      titulo: [this.evento ? this.evento.titulo : '', [Validators.required]],
      descripcion: [
        this.evento ? this.evento.descripcion : '',
        [Validators.required],
      ],
      fechaReserva: [
        this.evento ? this.evento.fechaReserva : '',
        [Validators.required],
      ],
      usuario: [this.evento ? this.evento.usuario : ''],
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

  direccionActualizada($event) {
    let { calle, numero, provincia, codigo, localidad } = $event;
    this.evento.direccion = `${calle} ${numero} ${localidad} ${codigo}`
  }
}
