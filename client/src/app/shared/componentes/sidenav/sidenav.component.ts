import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input() links: Array<string>;
  @ViewChild('sidenav', { static: false }) sidenav?: MatSidenav;
  subEventoClickMenu: Subscription;

  constructor(private adminService: AdminService, private authService: AuthService) {}

  ngOnInit(): void {
    this.subEventoClickMenu = this.adminService.menuIconClick$.subscribe(
      (valor: boolean) => {
        if (valor) {
          this.sidenav.toggle();
        }
      }
    );
  }

  reemplazarLinksATitutosTabs(link: string) {
    return link.replace('-', ' ');
  }

  cerrarSesion() {
    this.authService.logout(false);
  }

  ngOnDestroy() {
    this.subEventoClickMenu.unsubscribe();
  }
}
