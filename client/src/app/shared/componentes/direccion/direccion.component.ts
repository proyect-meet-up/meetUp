import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Direccion, ProvinciaResponse } from '../direccion.model';
import { EventoService } from '../../../eventos/evento.service';
import { SnackbarService } from '../../services/snackbar.service';

interface DataProvincia {
  provincia: string,
  codigo: string
}

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit, OnDestroy {
  direccionFormulario: FormGroup;
  @Output() nuevaDireccionEvent = new EventEmitter();
  @Input('expanded') expanded: boolean;
  @Input('actualizarDireccion') actualizarDireccion: Direccion;

  provincias: DataProvincia[];
  codigo: number;

  constructor(
    private fb: FormBuilder,
    private eventosServices: EventoService
  ) {}

  ngOnInit(): void {
    this.getProvincias();

    this.crearFormularioDireccion();

    if (this.direccionFormulario) {
      this.direccionFormulario.valueChanges.subscribe(() => {
        this.nuevaDireccion();
      });
    }

    this.actualizarCampoCodigoPostal();
  }

  crearFormularioDireccion() {
    this.direccionFormulario = this.fb.group({
      calle: [ this.actualizarDireccion ? this.actualizarDireccion.calle : '' , Validators.required],
      numero: [ this.actualizarDireccion ? this.actualizarDireccion.numero : '' , Validators.required],
      provincia: [ this.actualizarDireccion ? this.actualizarDireccion.provincia : '' , Validators.required],
      codigo: [ this.actualizarDireccion ? this.actualizarDireccion.codigo : this.codigo, Validators.required],
      localidad: [ this.actualizarDireccion ? this.actualizarDireccion.ciudad : '' ]
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

    this.direccionFormulario.get('codigo').patchValue(this.codigo);
  }

  actualizarCampoCodigoPostal() {
    this.direccionFormulario.get('provincia').valueChanges.subscribe(() => {
      this.obtenerCodigoDesdeProvincias();
    });
  }

  nuevaDireccion() {
    this.nuevaDireccionEvent.emit(this.direccionFormulario);
  }

  ngOnDestroy() {
    this.expanded = false;
  }
}


