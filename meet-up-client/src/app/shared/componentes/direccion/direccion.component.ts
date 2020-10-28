import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {
  direccionFormulario: FormGroup;
  @Output() nuevaDireccionEvent = new EventEmitter();

  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.crearFormularioDireccion();
    if( this.direccionFormulario) {
      this.direccionFormulario.valueChanges.subscribe(() => {
        if ( this.direccionFormulario.valid) {
          this.nuevaDireccion();
        }
      });
    }
  }

  crearFormularioDireccion() {
    this.direccionFormulario = this.fb.group({
      calle: ['', Validators.required],
      numero: [ null, Validators.required],
      codigo: [ null, Validators.required],
      localidad: ['', Validators.required],
      municipio: ['', Validators.required]
    })
  }

  nuevaDireccion() {
    this.nuevaDireccionEvent.emit(this.direccionFormulario.value)
  }
}
