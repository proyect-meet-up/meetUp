import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
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
  id: number;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router
  ) {

    /* const id = Number(this.route.snapshot.params["id"]);    
    this.evento = this.eventoService.obtenerEvento(id); */
  }

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.eventosBuscados$
      .pipe(skip(1))
      .subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.evento = this.eventoService.obtenerEvento(this.id);
        }
      );
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }


}
