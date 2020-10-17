import { Component, OnInit } from '@angular/core';
import { Evento, eventos } from '../evento.model'
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss']
})
export class ListadoEventosComponent implements OnInit {

  eventos: Evento[] = [];

  constructor( private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventos = this.eventoService.obtenerEventos();
  }

}
