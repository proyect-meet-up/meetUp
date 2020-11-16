import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  headers = new HttpHeaders();
  params = new HttpParams();
  path: string = 'usuarios';
  URL = environment.URL


  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
  }

  getUsuarios() {
    return this.http.get(`${this.URL}/${this.path}`);
  }

  crearUsuario(usuario) {
    return this.http
      .post(`${this.URL}/${this.path}`, usuario, { headers: this.headers })
  }

  comprobacionExisteEmailUsuario(email: string) {
    return this.http.get(`${this.URL}/${this.path}/${email}`);
  }
}
