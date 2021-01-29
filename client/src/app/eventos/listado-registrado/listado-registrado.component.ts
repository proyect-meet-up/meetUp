import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EventoService } from '../evento.service';
import { Usuario } from 'src/app/privado/usuario/usuario.model';
import { Evento } from '../evento.model';
import { filter, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-registrado',
  templateUrl: './listado-registrado.component.html',
  styleUrls: ['./listado-registrado.component.scss'],
})
export class ListadoRegistradoComponent implements OnInit, OnDestroy {
  usuario: Usuario;
  eventos: Evento[];
  suscriptorUsuario: Subscription;
  suscriptorEventos: Subscription;

  constructor(
    private eventosService: EventoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {  
     
    this.suscriptorUsuario = this.authService.usuario$.subscribe( (data: Usuario) => {
      this.usuario = data;
    } );
    this.suscriptorEventos = this.eventosService.eventosBuscados$
      .pipe(
        map((eventos: Evento[]) =>
          eventos.filter((e) => e.reservas.length !== 0)
        ),
        map((eventos) =>
          eventos.filter((ev) => ev.reservas.find((r) => r === this.usuario._id))
        )
      )
      .subscribe( (data: Evento[]) => this.eventos = data)

    this.eventosService.obtenerEventosReservadosDelUsuario()
        .subscribe( data => console.log(data))
  }

  ngOnDestroy() {
    this.suscriptorUsuario.unsubscribe();
    this.suscriptorEventos.unsubscribe();
  }
}
