import { Component, OnInit } from '@angular/core';
import { eventosReservados } from '../reservas.model';


@Component({
  selector: "app-reservas",
  templateUrl: "./reservas.component.html",
  styleUrls: ["./reservas.component.scss"],
})
export class ReservasComponent implements OnInit {
  displayedColumns: string[] = [
    "nombre",
    "titulo",
    "fechaReserva",
    "direccion",
    'detalle'
  ];
  dataSource = eventosReservados;

  constructor() {}

  ngOnInit(): void {}
}
