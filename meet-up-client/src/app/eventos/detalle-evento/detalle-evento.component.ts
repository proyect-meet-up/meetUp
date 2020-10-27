import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Button } from 'protractor';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
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
  logueado = false;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router,
    private authService: AuthService
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

     this.authService.estaLogueado$.subscribe( valor => {
       this.logueado = valor;
     })
  }

  irReserva() {
    if(this.logueado) {
      this.router.navigate(['privado', 'reserva-evento', this.evento.uid])
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Inicia sesión o registrate',
        backdrop: true,
        allowOutsideClick: true,
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Inicia sesión`,
        denyButtonText: `Registro`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['login']);
        } else if (result.isDenied) {
          this.router.navigate(['register']);
        }
      });
      //this.router.navigate(['reserva-evento', this.evento.uid])
    }
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }


}
