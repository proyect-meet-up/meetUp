import { trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminService } from '../../../admin/admin.service';
import { Subscription } from 'rxjs';
import { flashingState } from '@shared/componentes/animations/animation';
import { Usuario } from 'src/app/privado/usuario/usuario.model';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  animations: [flashingState],
})
export class HeaderAdminComponent implements OnInit, OnDestroy {
  toggle: boolean = false;
  subRouter: Subscription;
  titulo: string = 'Confirmar eventos';
  total: number;
  usuario: Usuario;
  usuarioSub: Subscription;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subRouter = this.router.events.subscribe((data: NavigationEnd) => {
      this.toggle = false;
      if (data instanceof RouterEvent) {
        if (data instanceof NavigationEnd) {
          this.transformarUrlToTitulo(data.url);
        }
      }
    });

    this.usuarioSub = this.authService.usuario$
      .subscribe( (usuario: Usuario) => this.usuario = usuario)


  }

  transformarUrlToTitulo(url: string) {
    let transformar = url
      .split('/')
      .filter((el) => el !== '' && el !== 'admin');
    let [titulo] = transformar;
    if (titulo) {
      this.titulo = titulo.replace('-', ' ');
    }
  }

  dispararEventoClick() {
    this.adminService.listenEventoMenuIconClick(true);
    this.stateToggle();
  }

  stateToggle() {
    this.toggle = !this.toggle;
  }

  cerrarSesion() {
    this.authService.logout(false);
  }

  existenMisEventos($event: number) {
    this.total = $event;
  }

  ngOnDestroy() {
    this.subRouter.unsubscribe();
    this.usuarioSub.unsubscribe();
  }
}
