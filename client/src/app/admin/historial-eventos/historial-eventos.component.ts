import { Component, OnInit } from '@angular/core';
import { diaDeHoy, formartearFecha } from '@shared/componentes/helpers/helpers';
import { Evento } from 'src/app/eventos/evento.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-historial-eventos',
  templateUrl: './historial-eventos.component.html',
  styleUrls: ['./historial-eventos.component.scss'],
})
export class HistorialEventosComponent implements OnInit {
  dataSource: Evento[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.obtenerEventosReservados();
  }

  obtenerEventosReservados() {
    this.adminService.obtenerTodosEventos().subscribe((data: Evento[]) => {
      let eventosHistoricos = data.map(formartearFecha);

      eventosHistoricos = eventosHistoricos.filter( e => e.fecha <= diaDeHoy());
      this.dataSource = [ ...eventosHistoricos ];

    });
  }
}
