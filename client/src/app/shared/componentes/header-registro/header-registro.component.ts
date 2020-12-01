import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoService } from 'src/app/eventos/evento.service';
import { Usuario } from 'src/app/privado/usuario/usuario.model';


@Component({
  selector: 'app-header-registro',
  templateUrl: './header-registro.component.html',
  styleUrls: ['./header-registro.component.scss'],
})
export class HeaderRegistroComponent implements OnInit {
  usuario: Usuario;
  sub: Subscription;
  total: number;

  constructor(
    private authService: AuthService,
    private eventosService: EventoService
  ) {}

  ngOnInit(): void {
   this.sub = this.authService.usuario$.subscribe( (data: Usuario) => {
     this.usuario = data
    });

  this.eventosService
    .getEventosDelUsuario('total')
    .subscribe((total: number) => {
      this.total = total;
    });

  }

  cerrarSesion() {
    this.authService.logout(false);
    this.sub.unsubscribe();

  }

  ngOnDestroy() {
    // NOTA: Este componente nunca se destruye a no ser que cerremos sesión.
    this.sub.unsubscribe();
  }
}
