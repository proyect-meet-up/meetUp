import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UrlService } from '@shared/componentes/services/url.service';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { skip, takeUntil, takeWhile, tap } from 'rxjs/operators';
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
    public dialog: MatDialog,
    private urlService: UrlService
  ) {
    /* const id = Number(this.route.snapshot.params["id"]);
    this.evento = this.eventoService.obtenerEvento(id); */
  }

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.keyUpBuscador$
      .pipe(
        skip(1),
        tap( data => console.log(data))
      )
      .subscribe(() => {
        console.log('Detalle componente se sucribea cambios en el buscador')
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
    this.urlService.setPreviousUrl(this.router.url);

    if (this.logueado) {
      this.router.navigate(['privado', 'reserva-evento', this.evento.uid]);
    } else {
      this.abrirModalNoAutenticado();
    }
  }

  abrirModalNoAutenticado() {
    this.dialog.open(ModalComponent, {});
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }
}
