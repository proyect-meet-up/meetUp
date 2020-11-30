
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { filter, map, pluck, tap } from 'rxjs/operators';

import { Evento } from "./evento.model";
import { ProvinciaResponse } from '../shared/componentes/direccion.model';
import { environment } from '@env/environment';
import { Categoria } from './categoria.model';

import { quitarAcentos } from '../shared/helpers/helpers';


@Injectable({
  providedIn: 'root',
})
export class EventoService {
  cursos: Evento[] = [];

  eventosBuscadosSource = new BehaviorSubject<Evento[]>(this.cursos);
  eventosBuscados$ = this.eventosBuscadosSource.asObservable();

  keyUpBuscador = new BehaviorSubject<boolean>(false);
  keyUpBuscador$ = this.keyUpBuscador.asObservable();

  // Control evento click del botón cuando se muestra el mensaje no hay resultados.
  clickBoton = new Subject<boolean>();
  clickBoton$ = this.clickBoton.asObservable();

  URL = environment.URL;

  constructor(private http: HttpClient) {
    this.obtenerTodosEventos();
  }

  obtenerTodosEventos(): Subscription {
    return this.http
      .get<Evento[]>(`${this.URL}/eventos`)
      .pipe(
        pluck('eventos'),
        tap((eventos: Evento[]) => this.eventosBuscadosSource.next(eventos))
      )
      .subscribe((eventos: Evento[]) => {
        this.cursos = [...eventos];
      });
  }

  obtenerEvento(id: string): Observable<Evento> {
    return this.http.get(`${this.URL}/eventos/${id}`)
      .pipe( pluck('evento'))
  }

  obtenerEventoDeBuscador(busqueda: string): Evento[] {
    let sinAcentos = quitarAcentos(busqueda);
    let cursos = this.cursos.filter((curso) =>
      quitarAcentos(curso.titulo.toLowerCase()).includes(
        sinAcentos.toLowerCase()
      )
    );
    this.eventosBuscadosSource.next(cursos);
    this.keyUpBuscador.next(true);
    return cursos;
  }

  eventoClickBoton(value: boolean) {
    this.clickBoton.next(value);
  }

  getEventosDelUsuario(param: string): Observable<any> {

    return this.http.get<any>(`${this.URL}/eventos/usuario`)
      .pipe(
        pluck(`${param}`)
      );
  }

  getProvincias(): Observable<ProvinciaResponse[]> {
    return this.http.get(`${this.URL}/localizacion/provincias`).pipe(
      pluck('body', 'records'),
      map((el: ProvinciaResponse[]) =>
        el.map((e: ProvinciaResponse) => e['fields'])
      )
    );
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get(`${this.URL}/categorias`).pipe(pluck('categorias'));
  }

  crearEvento(formEvento: Evento) {
    return this.http.post(`${this.URL}/eventos`, formEvento);
  }

  actualizarEvento(idEvento: string, eventoParaActualizar) {
    return this.http.put(`${this.URL}/eventos/${idEvento}`, eventoParaActualizar);

  }
}
