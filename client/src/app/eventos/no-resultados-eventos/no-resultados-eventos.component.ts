import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-no-resultados-eventos',
  templateUrl: './no-resultados-eventos.component.html',
  styleUrls: ['./no-resultados-eventos.component.scss'],
})
export class NoResultadosEventosComponent implements OnInit {
  eventos: Evento[];
  sub: Subscription;

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.sub = this.eventoService.eventosBuscados$
      .subscribe( (eventos: Evento[]) => this.eventos = eventos )
  }

  eventoClickBoton() {
    this.eventoService.eventoClickBoton(true);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
