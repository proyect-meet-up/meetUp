import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../privado/usuario/usuario.model';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reserva-evento',
  templateUrl: './reserva-evento.component.html',
  styleUrls: ['./reserva-evento.component.scss'],
})
export class ReservaEventoComponent implements OnInit {
  evento: Evento;
  id: string;
  formularioReserva: FormGroup;
  usuario: Usuario;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventoService,
    private fb: FormBuilder,
    private valdacionesService: ValidadoresService,
    private authService: AuthService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.eventosService.obtenerEvento(this.id).subscribe((data: Evento) => {
      this.evento = data;
    });
    this.sub = this.authService.usuario$.subscribe(
      (data: Usuario) => (this.usuario = data)
    );
  }

  ngOnInit(): void {
    this.crearFormularioReserva();
  }

  crearFormularioReserva() {
    this.formularioReserva = this.fb.group({
      nombre: [this.usuario ? this.usuario.nombre : '', [Validators.required]],
      apellido: [
        this.usuario ? this.usuario.apellido : '',
        [Validators.required],
      ],
      email: [
        this.usuario ? this.usuario.email : '',
        [Validators.required, this.valdacionesService.comprobarValidacionEmail],
      ],
      telefono: [this.usuario ? this.usuario.telefono : '', [ Validators.required ]],
    });

    this.setDisableCamposFormulario(this.formularioReserva.controls);
  }

  setDisableCamposFormulario(...campos) {
    let [propiedadesControls] = campos;

    for (const control in propiedadesControls) {
      if (!control.includes('telefono')) {
        this.formularioReserva.get(control).disable();
      }
    }
  }

  reservarEvento() {
    console.log('Desde Formulario RESERVA', this.formularioReserva.value);


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
