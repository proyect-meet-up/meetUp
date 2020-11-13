import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, pluck, tap } from 'rxjs/operators';

import { Evento, eventos } from "./evento.model";
import { ProvinciaResponse } from '../shared/componentes/direccion.model';
import { environment } from '@env/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  cursos: Evento[] = eventos;

  eventosBuscadosSource = new BehaviorSubject<Evento[]>(this.cursos);
  eventosBuscados$ = this.eventosBuscadosSource.asObservable();

  clickReserva: boolean = true;
  clickBoton = new Subject<boolean>();
  clickBoton$ = this.clickBoton.asObservable();
  URL = environment.URL;

  constructor(private http: HttpClient) {}

  obtenerEventos(): Evento[] {
    this.eventosBuscadosSource.next(this.cursos);
    return this.cursos.slice();
  }

  obtenerEvento(id: number): Evento {
    let curso = this.cursos.filter((curso) => curso.uid === id);
    let [evento] = curso;

    // TODO retornar el evento vacio
    if (!evento) {
      return;
    }

    return evento;
  }

  obtenerEventoDeBuscador(busqueda: string): Evento[] {
    let sinAcentos = this.quitarAcentos(busqueda);
    let cursos = this.cursos.filter((curso) =>
      this.quitarAcentos(curso.titulo.toLowerCase()).includes(
        sinAcentos.toLowerCase()
      )
    );
    this.eventosBuscadosSource.next(cursos);
    return cursos;
  }

  eventoClickBoton(value: boolean) {
    this.clickBoton.next(value);
  }

  quitarAcentos(cadena) {
    const acentos = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
      Á: 'A',
      É: 'E',
      Í: 'I',
      Ó: 'O',
      Ú: 'U',
    };
    return cadena
      .split('')
      .map((letra) => acentos[letra] || letra)
      .join('')
      .toString();
  }

  getProvincias(): Observable<ProvinciaResponse[]> {
    return this.http.get(`${this.URL}/localizacion/provincias`).pipe(
      pluck('body', 'records'),
      map((el: ProvinciaResponse[]) =>
        el.map((e: ProvinciaResponse) => e['fields'])
      )
    );
  }

  getCategorias(): Observable<Categoria> {
    return this.http.get(`${this.URL}/categorias`).pipe(pluck('categorias'));
  }
}
