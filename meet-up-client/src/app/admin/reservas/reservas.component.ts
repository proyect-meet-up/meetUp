import { Component, OnInit } from '@angular/core';
import { EventosReservados } from '../reservas.model';

  const eventosReservados: EventosReservados[] = [
    {
      nombre: "Fulanito",
      titulo: "Hydrogen",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "H",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Helium",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "He",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Lithium",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "Li",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Beryllium",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "Be",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Boron",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "B",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Carbon",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "C",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Nitrogen",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "N",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Oxygen",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "O",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Fluorine",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "F",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
    {
      nombre: "Fulanito",
      titulo: "Neon",
      fechaReserva: new Date(2020, 11, 17),
      direccion: "Ne",
      descripcion: "dskfjklsdjflksdjflksdjflksdjflksdjkfl",
    },
  ];



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
