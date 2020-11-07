import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.scss'],
})
export class TableAdminComponent implements OnInit {
  displayedColumns: string[] = [
    'usuario',
    'titulo',
    'fechaReserva',
    'detalle',
    'select',
  ];

  @Input('data') dataSource;
  @Output() eventoSelection$: EventEmitter<any> = new EventEmitter();
  sub: Subscription;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.dataSource = this.dataSource.map((evento) => ({
      ...evento,
      ['seleccionado']: false,
    }));

    this.sub = this.adminService.seleccionadoTodos$.subscribe((data) => {
      this.dataSource = this.dataSource.map( el => ({...el, 'seleccionado': data}))
    });

  }

  cambioEventoSeleccionado(evento) {
    evento.seleccionado = !evento.seleccionado;
    this.eventoSelection$.emit(evento);
  }
}


