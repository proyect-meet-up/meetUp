import { Component, OnInit } from '@angular/core';
import { diaDeHoy, formartearFecha } from '@shared/componentes/helpers/helpers';
import { Evento } from 'src/app/eventos/evento.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {
  dataSource: Evento[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.obtenerEventosReservados();
  }

  obtenerEventosReservados() {
    this.adminService.obtenerTodosEventos().subscribe((data: Evento[]) => {
      let eventosConfirmados = data.map(formartearFecha);
      eventosConfirmados = eventosConfirmados
        .filter((e) => e.fecha >= diaDeHoy())
        .filter((e) => e.confirmar === true);
      this.dataSource = [...eventosConfirmados];
    });
  }
}
