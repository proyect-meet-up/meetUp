import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL;
  headers = new HttpHeaders();
  path: string = 'usuarios'

  constructor(private http: HttpClient) { }

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();

  esAdmin = new BehaviorSubject(false);
  esAdmin$ = this.esAdmin.asObservable();

  crearUsuario(usuario) {
    this.headers.set('Content-Type', 'application/json');
    return this.http.post(`${this.URL}/${this.path}`,usuario, {headers: this.headers});
   
  }

  getUsuarios() {
     this.headers.set('Content-Type', 'application/json');
     return this.http.get(`${this.URL}/${this.path}`);
  }

  login(valor: boolean) {
    this.estaLogueadoSource.next(valor);
  }

  isAdmin(valor: boolean) {
    this.esAdmin.next(valor);
  }

 logout (valor:boolean): void {
    this.estaLogueadoSource.next(valor);
    this.esAdmin.next(valor);
  }

}
