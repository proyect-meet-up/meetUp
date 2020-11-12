import { SelectionModel } from '@angular/cdk/collections';
import { Component,OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { EventosReservados, eventosReservados } from '../reservas.model';

@Component({
  selector: 'app-confirmar-eventos',
  templateUrl: './confirmar-eventos.component.html',
  styleUrls: ['./confirmar-eventos.component.scss'],
})
export class ConfirmarEventosComponent implements OnInit {
  eventos = [];
  dataSource: EventosReservados[] = eventosReservados;
  selection = new SelectionModel<EventosReservados>(true);
  sub: Subscription;
  estaSeleccionadoTodos: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.sub = this.adminService.seleccionadoTodos$.subscribe((data) => {
      this.estaSeleccionadoTodos = data;
      if ( this.estaSeleccionadoTodos ) {
        this.eventos = [];
        this.eventos = this.dataSource;
      } else {
        this.eventos = [];
      }
    });
  }

  obtenerEventoSeleccionado(evento: EventosReservados) {
    if (this.eventos.length === 0) {
      this.eventos.push(evento);
    } else {
      this.comprobarExistenciaEventoEnEventos(evento);
    }
    this.selection.toggle(evento);
  }

  comprobarExistenciaEventoEnEventos(evento) {
    let index = this.eventos.findIndex((el) => el.id === evento.id);

    if (index === -1) {
      this.eventos.push(evento);
    } else {
      this.eventos.splice(index, 1);
    }
  }

  confirmarEventos() {
    // TODO Aqui enviamos al servidor aquellos eventos confirmados por el administrador
    console.log('Eventos que enviamos como confirmados a la API', this.eventos)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

