import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { skip, takeUntil, takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalComponent } from 'src/app/shared/componentes/modal/modal.component';
import { Evento } from "../evento.model";
import { EventoService } from "../evento.service";


@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss'],
})
export class DetalleEventoComponent implements OnInit, OnDestroy {
  evento: Evento;
  eventosSuscription: Subscription;
  id: number;
  logueado = false;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    /* const id = Number(this.route.snapshot.params["id"]);
    this.evento = this.eventoService.obtenerEvento(id); */
  }

  ngOnInit(): void {

    this.eventosSuscription = this.eventoService.eventosBuscados$
      .pipe(
        skip(1),
        // takeWhile(() => this.eventoService.clickReserva)
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.evento = this.eventoService.obtenerEvento(this.id);
    });

    this.authService.estaLogueado$.subscribe((valor) => {
      this.logueado = valor;
    });

  }

  irReserva() {

    if (this.logueado) {
      this.router.navigate(['privado', 'reserva-evento', this.evento.uid]);
    } else {
      this.abrirModalNoAutenticado();
    }

  }

  abrirModalNoAutenticado() {

    this.dialog.open(ModalComponent, {

    });
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }
}
