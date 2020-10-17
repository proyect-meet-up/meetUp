import { Component, OnInit } from '@angular/core';
import { Evento, eventos } from '../evento.model'

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss']
})
export class ListadoEventosComponent implements OnInit {

  eventos: Evento[] = eventos;

  constructor() { }

  ngOnInit(): void {
  }

}
