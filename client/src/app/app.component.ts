import { Component, OnInit, Renderer2, ViewChild, ViewChildren, ElementRef, AfterViewInit, ContentChild, TemplateRef } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, Scroll } from "@angular/router";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Barum';
  mostrarBuscador: boolean = true;
  estaLogueado: boolean = false;
  admin: boolean = false;
  @ViewChild('headerscroll', { static: false }) headerScroll: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    private renderer: Renderer2
  ) {
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

    this.renderer.listen('window', 'scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        this.renderer.addClass(this.headerScroll.nativeElement, 'scrolling')
      } else {
        this.renderer.removeClass(this.headerScroll.nativeElement, 'scrolling')
      }
    })
  }

  ngOnInit() {
    this.authService.estaLogueado$.subscribe((data: boolean) => {
      this.estaLogueado = data;
    });
    this.authService.esAdmin$.subscribe((data: boolean) => {
      this.admin = data;
    });

  }

}



