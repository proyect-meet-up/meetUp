import { SelectionModel } from '@angular/cdk/collections';
import { Component,OnInit } from '@angular/core';
import { EventosReservados, eventosReservados } from '../reservas.model';

@Component({
  selector: 'app-confirmar-eventos',
  templateUrl: './confirmar-eventos.component.html',
  styleUrls: ['./confirmar-eventos.component.scss'],
})
export class ConfirmarEventosComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'titulo',
    'fechaReserva',
    'detalle',
    'select',
  ];

  dataSource : EventosReservados[] = eventosReservados;
  selection = new SelectionModel<EventosReservados>(true, []);

  constructor() {}

  ngOnInit(): void {}

  obtenerEventoSeleccionado(evento: EventosReservados) {
    this.selection.toggle(evento)
  }
}

