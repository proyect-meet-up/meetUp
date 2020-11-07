import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { EventosReservados } from '../reservas.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-checkbox-admin',
  templateUrl: './checkbox-admin.component.html',
  styleUrls: ['./checkbox-admin.component.scss'],
})
export class CheckboxAdminComponent implements OnInit {

  @Input('data') dataSource: EventosReservados[];
  @Input('selection') selection: SelectionModel<EventosReservados>;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void { }

  estanSeleccionadosTodos(): boolean{
    const numSeleccionados = this.selection.selected.length;
    const numTotalReservas = this.dataSource.length;
    return numSeleccionados === numTotalReservas;
  }

  masterToggle() {
    if (this.estanSeleccionadosTodos()) {
      this.selection.clear();
      this.adminService.listenEventoSeleccionadoTodos(false);
    } else {
      this.selection.clear();
      this.dataSource.forEach((evento) => {
        this.selection.select(evento);
        this.adminService.listenEventoSeleccionadoTodos(true);
      });
    }
  }
}
