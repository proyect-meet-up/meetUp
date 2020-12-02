import { SelectionModel } from '@angular/cdk/collections';
import { Component,OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoService } from 'src/app/eventos/evento.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-confirmar-eventos',
  templateUrl: './confirmar-eventos.component.html',
  styleUrls: ['./confirmar-eventos.component.scss'],
})
export class ConfirmarEventosComponent implements OnInit {
  eventosSeleccionados = [];
  dataSource: Evento[];
  selection = new SelectionModel<Evento>(true);
  sub: Subscription;
  estaSeleccionadoTodos: boolean = false;

  constructor( private adminService: AdminService ) {}

  ngOnInit(): void {
    this.sub = this.adminService.seleccionadoTodos$.subscribe((data) => {
      this.estaSeleccionadoTodos = data;
      if ( this.estaSeleccionadoTodos ) {
        this.eventosSeleccionados = [...this.dataSource];
      } else {
        this.eventosSeleccionados = [];
      }
    });

    this.obtenerTodosLosEventos();
  }

  obtenerTodosLosEventos() {
    this.adminService.obtenerTodosEventos()
      .subscribe((data: Evento[]) => {
        let eventosNoConfirmados = data.filter( e => e.confirmar === false);
        this.dataSource = [...eventosNoConfirmados];
      })

  }

  obtenerEventoSeleccionado(evento: Evento) {

    if (this.eventosSeleccionados.length === 0) {
      this.eventosSeleccionados.push(evento);
    } else {
      this.comprobarExistenciaEventoEnEventos(evento);
    }

    this.selection.toggle(evento);
  }

  comprobarExistenciaEventoEnEventos(evento) {

    let index = this.eventosSeleccionados.findIndex((el) => el._id === evento._id);

    if (index === -1) {
      this.eventosSeleccionados.push(evento);
    } else {
      this.eventosSeleccionados.splice(index, 1);
    }
  }

  confirmarEventos() {
    // TODO Aqui enviamos al servidor aquellos eventos confirmados por el administrador

    let respuestaFiltro = this.eventosSeleccionados.map( e => {
      return {
        _id: e._id,
        confirmar: true
      }
    });

    this.adminService.actualizarEventosAConfirmar(respuestaFiltro)
    .subscribe( data => {

    })


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

