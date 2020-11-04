import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.authService.logout(false);
  }
}
