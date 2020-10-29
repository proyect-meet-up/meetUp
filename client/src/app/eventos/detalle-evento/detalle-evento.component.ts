import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { skip, takeUntil, takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalComponent } from 'src/app/shared/componentes/modal/modal.component';
import { Evento } from "../evento.model";
import { EventoService } from "../evento.service";
import { Location } from '@angular/common';

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
  meDestruyo: boolean;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
    private location: Location
  ) {
    /* const id = Number(this.route.snapshot.params["id"]);
    this.evento = this.eventoService.obtenerEvento(id); */
  }

  ngOnInit(): void {
    console.log(this.location.path(), this.location.isCurrentPathEqualTo(this.location.path()))
    this.meDestruyo = true;
    console.log('me destruyo...ngOnInit', this.meDestruyo);

    this.eventosSuscription = this.eventoService.eventosBuscados$
      .pipe(
        skip(1),
        takeWhile(() => this.meDestruyo)
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
    this.meDestruyo = false;
    console.log('me destruyo...', this.meDestruyo)
    if (this.logueado) {
      this.router.navigate(['privado', 'reserva-evento', this.evento.uid]);
    } else {
      this.abrirModalNoAutenticado();
    }

  }

  abrirModalNoAutenticado() {
    this.dialog.open(ModalComponent, {
      minWidth: '450px',
    });
  }

  ngOnDestroy() {
    console.log(`¿ Se destruye el detalle componente ?`)
    this.eventosSuscription.unsubscribe();
  }
}
