import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Evento } from '../../eventos/evento.model';

@Component({
  selector: 'app-checkbox-admin',
  templateUrl: './checkbox-admin.component.html',
  styleUrls: ['./checkbox-admin.component.scss'],
})
export class CheckboxAdminComponent implements OnInit {

  @Input('data') dataSource: Evento[];
  @Input('selection') selection: SelectionModel<Evento>;

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
