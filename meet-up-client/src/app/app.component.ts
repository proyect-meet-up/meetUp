import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "meet-up";
  show: boolean = true;

  constructor(private router: Router) {

        this.router.events.subscribe((event: RouterEvent) => {
          if (event instanceof NavigationEnd) {
            if (
              event.url.includes("detalle") ||
              event.url.includes("login") ||
              event.url.includes("register")
            ) {
              this.show = false;
            } else {
              this.show = true;
            }
          }
        });
  }
}
