import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.dataSource = this.dataSource.map((evento) => ({
      ...evento,
      ['seleccionado']: false,
    }));

    this.sub = this.adminService.seleccionadoTodos$.subscribe((data) => {
      this.dataSource = this.dataSource.map((el) => ({
        ...el,
        seleccionado: data,
      }));
    });
  }

  cambioEventoSeleccionado(evento) {
    evento.seleccionado = !evento.seleccionado;
    this.eventoSelection$.emit(evento);
  }

  irDetalle(evento): void {
    this.router.navigate(['admin', 'confirmar-eventos', `${evento.id}`], { state:  evento  });
  }
}


