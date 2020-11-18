import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { environment } from '../../environments/environment'
import {tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.URL;

  constructor( private http: HttpClient) { }

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();

  esAdmin = new BehaviorSubject(false);
  esAdmin$ = this.esAdmin.asObservable();


  login( formulario ) {
    this.estaLogueadoSource.next(true);
   return this.http.post(`${this.URL}/login`, formulario)
      .pipe(
        tap ( (resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

  isAdmin(valor: boolean) {
    this.esAdmin.next(valor);
  }

  logout (valor:boolean): void {
    this.estaLogueadoSource.next(valor);
    this.esAdmin.next(valor);
    localStorage.removeItem('token');
  }

}
