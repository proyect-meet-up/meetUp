import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/usuario/usuario.model';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';

@Component({
  selector: "app-reserva-evento",
  templateUrl: "./reserva-evento.component.html",
  styleUrls: ["./reserva-evento.component.scss"],
})
export class ReservaEventoComponent implements OnInit {
  evento: Evento;
  id: number;
  formularioReserva: FormGroup;
  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventoService,
    private fb: FormBuilder,
    private valdacionesService: ValidadoresService
  ) {
    this.id = +this.route.snapshot.params["id"];
    this.evento = this.eventosService.obtenerEvento(this.id);
    this.usuario = new Usuario('Borja', 'Arana', 'borja@mail.com', '634584653')

  }

  ngOnInit(): void {
    if( this.evento ) {
      this.crearFormularioReserva();
    }
  }

  crearFormularioReserva() {
    this.formularioReserva = this.fb.group({
      nombre: [ this.usuario ? this.usuario.nombre : '', [Validators.required]],
      apellido: [ this.usuario ? this.usuario.apellido : '', [Validators.required]],
      email: [
        this.usuario ? this.usuario.email: '',
        [Validators.required, this.valdacionesService.comprobarValidacionEmail],
      ],
      telefono: [ this.usuario ? this.usuario.telefono: ''],
    });

    this.setDisableCamposFormulario(this.formularioReserva.controls);
  }

  setDisableCamposFormulario(...campos) {
    let [propiedadesControls] = campos;

    for (const control in propiedadesControls) {
      if (!control.includes("telefono")) {
        this.formularioReserva.get(control).disable();
      }
    }

  }

  reservarEvento() {
    console.log('Desde Formulario RESERVA', this.formularioReserva.value)
  }
}
