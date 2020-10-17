import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Evento } from "../evento.model";

@Component({
  selector: "app-card-evento",
  templateUrl: "./card-evento.component.html",
  styleUrls: ["./card-evento.component.scss"],
})
export class CardEventoComponent implements OnInit {
  @Input() curso: Evento;
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irDetalleEvento(id: number) {
    this.router.navigate(["detalle-evento", this.curso.uid]);
  }
}
