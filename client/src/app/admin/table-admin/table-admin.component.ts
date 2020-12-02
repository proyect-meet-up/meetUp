import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Evento } from 'src/app/eventos/evento.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.scss'],
})
export class TableAdminComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    'usuario',
    'titulo',
    'fecha',
    'detalle',
    'select',
  ];

  @Input('data') dataSource: Evento[];
  @Output() eventoSelection$: EventEmitter<any> = new EventEmitter();
  sub: Subscription;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.sub = this.adminService.seleccionadoTodos$.subscribe((data) => {
      this.dataSource = this.dataSource.map((el) => ({
        ...el,
        seleccionado: data,
      }));
    });
  }

  ngOnChanges() {
    if ( this.dataSource ) {
      this.dataSource = this.dataSource.map((evento) => ({
        ...evento,
        ['seleccionado']: false,
      }));
    }
  }

  cambioEventoSeleccionado(evento) {
    evento.seleccionado = !evento.seleccionado;
    this.eventoSelection$.emit(evento);
  }

  irDetalle( evento: Evento ): void {
    this.router.navigate(['admin', 'confirmar-eventos', `${evento._id}`]);
  }
}


