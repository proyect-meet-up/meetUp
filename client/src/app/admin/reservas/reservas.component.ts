import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-reservas",
  templateUrl: "./reservas.component.html",
  styleUrls: ["./reservas.component.scss"],
})
export class ReservasComponent implements OnInit {
  displayedColumns: string[] = [
    "nombre",
    "titulo",
    "fecha",
    "direccion",
    'detalle'
  ];
  dataSource = [];

  constructor() {}

  ngOnInit(): void {}
}
