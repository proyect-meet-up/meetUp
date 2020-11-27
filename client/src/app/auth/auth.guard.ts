import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  logueado: boolean;


  canActivate(): Observable<boolean> {

     return this.authService.estaLogueado$
      .pipe(
        tap( (estado: boolean) => {
          if (!estado) {
            this.router.navigate(['/login']);
          }
        })
      );
  }

}
