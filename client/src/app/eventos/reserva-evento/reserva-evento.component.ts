import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
  usuario: Usuario;
  sub: Subscription;
  @Input() eventoInput: Evento;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventoService,
    private authService: AuthService
  ) {
    if (this.route.snapshot.params['id']) {
      this.eventosService
        .obtenerEvento(this.route.snapshot.params['id'])
        .subscribe((data: Evento) => {
          this.evento = data;
          console.log('Evento', this.evento);
        });
    }

    this.sub = this.authService.usuario$.subscribe(
      (data: Usuario) => (this.usuario = data)
    );
  }

  ngOnInit(): void {

    if ( this.eventoInput ) {
      this.evento = {
        ...this.eventoInput
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
