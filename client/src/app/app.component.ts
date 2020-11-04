import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from "@angular/router";
import { AuthService } from './auth/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Barum";
  mostrarBuscador: boolean = true;
  estaLogueado: boolean = false;
  admin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
        this.router.events.subscribe((event: RouterEvent) => {
          if (event instanceof NavigationEnd) {
            if (
              event.url.includes('login') ||
              event.url.includes('register') ||
              event.url.includes('admin')
            ) {
              this.mostrarBuscador = false;
            } else {
              this.mostrarBuscador = true;
            }
          }
        });
  }

  ngOnInit() {
    this.authService.estaLogueado$.subscribe((data: boolean) => this.estaLogueado = data);
    this.authService.esAdmin$.subscribe((data: boolean) => this.admin = data);
  }


}



