import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { flashingState } from '@shared/componentes/animations/animation';
import { UrlService } from '@shared/componentes/services/url.service';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { skip, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from "../../privado/usuario/usuario.model";
import { ModalComponent } from 'src/app/shared/componentes/modal/modal.component';
import { Evento } from "../evento.model";
import { EventoService } from "../evento.service";


@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss'],
  animations: [flashingState],
})
export class DetalleEventoComponent implements OnInit, OnDestroy {
  evento: Evento;
  eventosSuscription: Subscription;
  id: string;
  logueado = false;
  usuario: Usuario;
  sub: Subscription;
  mostrarBotonReserva = true;

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
    this.sub = this.authService.usuario$.subscribe(
      (data: Usuario) => (this.usuario = data)     
    );

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.eventoService.obtenerEvento(this.id).subscribe((evento: Evento) => {
        this.evento = evento;
      });
    });

    this.obtenerEventoDelUsuario();
  }

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.keyUpBuscador$
      .pipe(skip(1))
      .subscribe(() => {
        this.router.navigate(['/']);
      });

 

    this.authService.estaLogueado$.subscribe((valor) => {
      this.logueado = valor;
    });
  }

  botonReserva() {
    this.urlService.setPreviousUrl(this.router.url);
    // TODO - Si el usuario es el administrador hay que redirigir a una ruta que todavía hay que especificar en el admin router

    if (this.logueado) {
      this.eventoService
        .reservarEvento(this.id, this.usuario._id)
        .subscribe(() => {
          // Volvemos a llamar a la API para actiualizar la BBDD
          this.eventoService.obtenerTodosEventos();
        });
      this.router.navigate(['privado', 'reserva-evento', this.evento._id]);     
    } else {
      this.abrirModalNoAutenticado();
    }
  }

  abrirModalNoAutenticado() {
    this.dialog.open(ModalComponent, {});
  }

  obtenerEventoDelUsuario() {
    console.log("los datos del usuario son: ", this.usuario)
    if(this.usuario != null) {
      this.eventoService.obtenerReservasDelUsuario(this.id, this.usuario._id).subscribe( (evento: Evento) => {
        console.log("los eventos del usuario: ", evento.reservas.length);
        if(evento.reservas.length > 0) {
          this.mostrarBotonReserva = false;
        } else {
          this.mostrarBotonReserva = true;
        }
      })

    }
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();   
  }
}
