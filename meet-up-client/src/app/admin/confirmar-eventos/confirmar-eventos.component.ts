import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { EventosReservados, eventosReservados } from '../reservas.model';

@Component({
  selector: 'app-confirmar-eventos',
  templateUrl: './confirmar-eventos.component.html',
  styleUrls: ['./confirmar-eventos.component.scss'],
})
export class ConfirmarEventosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'titulo', 'fechaReserva', 'detalle', 'select'];

  dataSource = eventosReservados;
  selection = new SelectionModel<EventosReservados>(true, []);

  constructor() {}

  ngOnInit(): void {
   // console.log('Select', this.selection.changed.subscribe( data => console.log(data)))
  }

  estanSeleccionadosTodos() {
    const numSeleccionados = this.selection.selected.length;
    const numTotalReservas = this.dataSource.length;
    return numSeleccionados === numTotalReservas;
  }

  masterToggle() {
    this.estanSeleccionadosTodos()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: EventosReservados): string {

    if (!row) {
      return `${this.estanSeleccionadosTodos() ? 'select' : 'deselect'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
}
