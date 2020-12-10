import { Component, OnInit } from '@angular/core';
import { flashingState } from '@shared/componentes/animations/animation';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import { Usuario } from 'src/app/privado/usuario/usuario.model';

@Component({
  selector: 'app-header-registro',
  templateUrl: './header-registro.component.html',
  styleUrls: ['./header-registro.component.scss'],
  animations: [flashingState],
})
export class HeaderRegistroComponent implements OnInit {
  usuario: Usuario;
  sub: Subscription;
  total: number;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.usuario$.subscribe((data: Usuario) => {
      this.usuario = data;
    });
  }

  cerrarSesion() {
    this.authService.logout(false);
    this.sub.unsubscribe();
  }

  existenMisEventos($event: number) {
    this.total = $event;
  }

  ngOnDestroy() {
    // NOTA: Este componente nunca se destruye a no ser que cerremos sesión.
    this.sub.unsubscribe();
  }
}
