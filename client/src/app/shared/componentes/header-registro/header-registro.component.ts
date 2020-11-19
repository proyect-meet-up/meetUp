import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from 'src/app/privado/usuario/usuario.model';


@Component({
  selector: 'app-header-registro',
  templateUrl: './header-registro.component.html',
  styleUrls: ['./header-registro.component.scss'],
})
export class HeaderRegistroComponent implements OnInit {
  estaLogueado: boolean = false;
  usuario: Usuario;
  sub: Subscription;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   this.sub = this.authService.usuario$.subscribe( (data: Usuario) => this.usuario = data );
  }

  cerrarSesion() {
    this.authService.logout(this.estaLogueado);
    this.sub.unsubscribe();

  }

  ngOnDestroy() {
    // NOTA: Este componente nunca se destruye a no ser que cerremos sesión.
    this.sub.unsubscribe();
  }
}
