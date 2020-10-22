import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Evento } from "../evento.model";
import { EventoService } from "../evento.service";

@Component({
  selector: "app-detalle-evento",
  templateUrl: "./detalle-evento.component.html",
  styleUrls: ["./detalle-evento.component.scss"],
})
export class DetalleEventoComponent implements OnInit, OnDestroy {
  evento: Evento;
  eventosSuscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router
  ) {
    // Obtenemos el parametro id y lo convertimos en number.
    const id = Number(this.route.snapshot.params["id"]);
    // Llamamos al servicio para obtener el evento
    this.evento = this.eventoService.obtenerEvento(id);
  }

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.eventosBuscados$
      .pipe(skip(1))
      .subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }


}
