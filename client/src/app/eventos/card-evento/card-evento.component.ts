import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Evento } from "../evento.model";
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { diaDeHoy } from '../../shared/helpers/helpers';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss'],
})
export class CardEventoComponent implements OnInit, OnDestroy {
  @Input() curso: Evento;
  @Input() index: number;
  @Input('url') url: string;
  sub: Subscription;
  tieneToken: boolean;
  hoy;
  evento: Evento;


  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.evento = {
      ...this.curso,
      fecha: moment(this.curso.fecha).format('YYYY-MM-DD')
    };

    this.hoy = diaDeHoy();

    this.sub = this.authService.estaLogueado$.subscribe(
      (data) => (this.tieneToken = data)
    );
  }

  irDetalleEvento() {
    if ( this.hoy >= this.evento.fecha) {
      return;
    }
    if (this.url === 'eventosDelUsuario') {
      this.router.navigate(['privado', 'eventos', 'usuario', this.curso._id]);
    } else {
      if (this.tieneToken) {
        this.router.navigate(['privado', 'detalle-evento', this.curso._id]);
      } else {
        this.router.navigate(['detalle-evento', this.curso._id]);
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


