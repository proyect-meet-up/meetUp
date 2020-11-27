import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-eventos-del-usuario',
  templateUrl: './eventos-del-usuario.component.html',
  styleUrls: ['./eventos-del-usuario.component.scss'],
})
export class EventosDelUsuarioComponent implements OnInit {
  eventos: Evento[];

  constructor(private eventosService: EventoService) {}

  ngOnInit() {
    this.eventosService
      .getEventosDelUsuario('eventos').subscribe( data => this.eventos = data)

  }
}
