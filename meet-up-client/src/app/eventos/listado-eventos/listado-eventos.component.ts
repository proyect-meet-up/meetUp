import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Evento, eventos } from '../evento.model'
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss']
})
export class ListadoEventosComponent implements OnInit, OnDestroy {

  eventosSuscription: Subscription;

  eventos: Evento[] = [];

  constructor( private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.eventosBuscados$.subscribe((datosActualizados: Evento[]) => {
      this.eventos = datosActualizados;
    })
    this.eventos = this.eventoService.obtenerEventos();
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }

}
