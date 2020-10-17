import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Evento } from "../evento.model";
import { EventoService } from "../evento.service";

@Component({
  selector: "app-detalle-evento",
  templateUrl: "./detalle-evento.component.html",
  styleUrls: ["./detalle-evento.component.scss"],
})
export class DetalleEventoComponent implements OnInit {
  evento: Evento;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService
  ) {
    // Obtenemos el parametro id y lo convertimos en number.
    const id = Number(this.route.snapshot.params["id"]);
    // Llamamos al servicio para obtener el evento
    this.evento = this.eventoService.obtenerEvento(id);
  }

  ngOnInit(): void {}
}
