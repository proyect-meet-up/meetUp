import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: "app-header-registro",
  templateUrl: "./header-registro.component.html",
  styleUrls: ["./header-registro.component.scss"],
})
export class HeaderRegistroComponent implements OnInit {
  estaLogueado: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.authService.logout(this.estaLogueado);
  }
}
