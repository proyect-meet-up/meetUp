import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  links = ['confirmar-eventos', 'reservas', 'nuevo-evento', 'historial'];

  constructor() {}

  ngOnInit(): void {}
}
