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

  usuarioSubject = new BehaviorSubject<Usuario>(
    JSON.parse(localStorage.getItem('usuario')) || null
  );
  usuario$ = this.usuarioSubject.asObservable();

  estaLogueadoSource = new BehaviorSubject<boolean>(
    localStorage.getItem('token') != null
  );
  estaLogueado$ = this.estaLogueadoSource.asObservable();

  esAdmin = new BehaviorSubject(JSON.parse(localStorage.getItem('panel')) === true);
  esAdmin$ = this.esAdmin.asObservable();

  constructor(private http: HttpClient) {}

  login(formulario) {
    return this.http.post(`${this.URL}/login`, formulario).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        localStorage.setItem('panel', resp.respuesta);
        this.usuarioSubject.next(resp.usuario);
        this.estaLogueadoSource.next(true);
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
    localStorage.removeItem('panel');
  }
}
