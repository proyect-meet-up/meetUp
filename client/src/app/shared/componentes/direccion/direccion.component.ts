import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProvinciaResponse } from '../direccion.model';
import { EventoService } from '../../../eventos/evento.service';

interface DataProvincia {
  provincia: string,
  codigo: string
}

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {
  direccionFormulario: FormGroup;
  @Output() nuevaDireccionEvent = new EventEmitter();
  provincias: DataProvincia[];
  codigo: number;

  constructor(
    private fb: FormBuilder,
    private eventosServices: EventoService
  ) { }

  ngOnInit(): void {

    this.getProvincias();

    this.crearFormularioDireccion();

    if (this.direccionFormulario) {
      this.direccionFormulario.valueChanges.subscribe(() => {
        if (this.direccionFormulario.valid) {
          this.nuevaDireccion();
        }
      });
    }

    this.actualizarCampoCodigoPostal();
  }

  crearFormularioDireccion() {
    this.direccionFormulario = this.fb.group({
      calle: ['', Validators.required],
      numero: [null, Validators.required],
      provincia: ['', Validators.required],
      codigo: [this.codigo, Validators.required],
      municipio: ['', Validators.required],
    });
  }

  getProvincias() {
     this.eventosServices
       .getProvincias()
       .subscribe((resonseData: ProvinciaResponse[]) => {
         this.provincias = resonseData.map(({ provincia, codigo }) => ({
           provincia,
           codigo,
         }));
       });
  }

  obtenerCodigoDesdeProvincias() {
    const provincia = this.direccionFormulario.get('provincia').value;

    if (provincia === null) {
      return;
    }

    let data = this.provincias.filter((el) => provincia === el.provincia);
    let [{ codigo }] = data;
    this.codigo = +codigo;

    this.direccionFormulario.get('codigo').patchValue(this.codigo)
  }

  actualizarCampoCodigoPostal() {
    this.direccionFormulario.get('provincia').valueChanges.subscribe(() => {
      this.obtenerCodigoDesdeProvincias();
    });
  }

  nuevaDireccion() {
    this.nuevaDireccionEvent.emit(this.direccionFormulario.value);
  }
}


