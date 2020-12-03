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
  @Input('vista') vistaTemplate: string;
  @Output() eventoSelection$: EventEmitter<any> = new EventEmitter();
  sub: Subscription;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {

    if (this.vistaTemplate === 'reservas' || this.vistaTemplate === 'historial') {
      let displayReverseColumns = this.displayedColumns.reverse();
      let [select, ...cambioDisplayedColumns] = displayReverseColumns;
      cambioDisplayedColumns = cambioDisplayedColumns.reverse();
      this.displayedColumns = [...cambioDisplayedColumns];
    }


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

  irDetalleEvento( evento: Evento ): void {
    let vista = this.vistaTemplate;

    switch (vista) {
      case 'reservas':
        this.router.navigate(['admin','reservas',`${evento._id}`]);
        break;
      case 'historial':
        this.router.navigate(['admin', 'historial', `${evento._id}`]);
        break;
      default:
        this.router.navigate(['admin', 'confirmar-eventos', `${evento._id}`]);
        break;
    }
  }
}


