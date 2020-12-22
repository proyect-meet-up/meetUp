import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EventoService } from '../evento.service';
import { Usuario } from 'src/app/privado/usuario/usuario.model';
import { Evento } from '../evento.model';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listado-registrado',
  templateUrl: './listado-registrado.component.html',
  styleUrls: ['./listado-registrado.component.scss'],
})
export class ListadoRegistradoComponent implements OnInit {
  usuario: Usuario;
  eventos: Evento[];

  constructor(
    private eventosService: EventoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.usuario$.subscribe( (data: Usuario) => {
      this.usuario = data;
    } );
    this.eventosService.eventosBuscados$
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


}
