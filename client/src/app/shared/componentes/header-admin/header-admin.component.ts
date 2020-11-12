import { trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminService } from '../../../admin/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit , OnDestroy{

  toggle: boolean = false;
  subRouter: Subscription;
  titulo: string = 'Confirmar eventos';

  constructor(private authService: AuthService, private adminService : AdminService, private router: Router) {}

  ngOnInit(): void {

    this.subRouter = this.router.events.subscribe( (data: NavigationEnd) => {

      this.toggle = false;
      if ( data instanceof RouterEvent) {
        if ( data instanceof NavigationEnd) {
          this.transformarUrlToTitulo(data.url)
        }
      }
    })
  }

  transformarUrlToTitulo( url: string) {
    let transformar = url.split('/').filter( el => el !== '' && el !== 'admin');
    let [titulo] = transformar;
    if ( titulo) {
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

  ngOnDestroy() {
    this.subRouter.unsubscribe();
  }
}