import { Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { Evento } from '../evento.model'
import { EventoService } from '../evento.service';
import { ProvinciaResponse } from '../../shared/componentes/direccion.model';
import { flashingState } from '@shared/componentes/animations/animation';


@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss'],
  animations: [ flashingState ]
})
export class ListadoEventosComponent implements OnInit, OnDestroy {
  eventos: Observable<Evento[]>;

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.eventosBuscados$;
  }

  ngOnDestroy() {

  }
}
