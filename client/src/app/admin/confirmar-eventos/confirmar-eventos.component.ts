import { SelectionModel } from '@angular/cdk/collections';
import { Component,OnInit } from '@angular/core';
import { EventosReservados, eventosReservados } from '../reservas.model';
import { AdminService } from 'src/app/admin/admin.service';

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

  dataSource = eventosReservados;
  selection = new SelectionModel<EventosReservados>(true, []);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  estanSeleccionadosTodos() {
    const numSeleccionados = this.selection.selected.length;
    const numTotalReservas = this.dataSource.length;
    return numSeleccionados === numTotalReservas;
  }

  masterToggle() {

    if ( this.estanSeleccionadosTodos()) {
      this.selection.clear()
      this.adminService.listenEventoSeleccionadoTodos(false)
    } else {
      this.selection.clear();
      this.dataSource.forEach((evento) => {
        this.selection.select(evento);
        this.adminService.listenEventoSeleccionadoTodos(true);
      })
    }
  }

  obtenerEventoSeleccionado(evento) {
    this.selection.toggle(evento)
  }

  // checkboxLabel(row?: EventosReservados): string {
  //   if (!row) {
  //     return `${this.estanSeleccionadosTodos() ? 'select' : 'deselect'} all`;
  //   }

  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
  //     row.id
  //   }`;
  // }
}

// const data = { a: 1, b: 2, c: 3 };

// const removeProp = 'b';

// const { [removeProp]: remove } = data;

// console.log(remove); // 2
