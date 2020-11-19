import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { environment } from '../../environments/environment'
import {tap } from 'rxjs/operators';
import { Usuario } from 'src/app/privado/usuario/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = environment.URL;
  usuarioSubject = new BehaviorSubject<Usuario>(null);
  usuario$ = this.usuarioSubject.asObservable();

  constructor(private http: HttpClient) {}

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();

  esAdmin = new BehaviorSubject(false);
  esAdmin$ = this.esAdmin.asObservable();

  login(formulario) {
    this.estaLogueadoSource.next(true);
    return this.http.post(`${this.URL}/login`, formulario).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        this.usuarioSubject.next(resp.usuario);
      })
    );
  }

  isAdmin(valor: boolean): void {
    this.esAdmin.next(valor);
  }

  logout(valor: boolean): void {
    this.estaLogueadoSource.next(valor);
    this.esAdmin.next(valor);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}
