import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Evento } from '../eventos/evento.model';
import { filter, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  menuIconClick = new Subject<boolean>();
  menuIconClick$ = this.menuIconClick.asObservable();

  seleccionadoTodos = new Subject<boolean>();
  seleccionadoTodos$ = this.seleccionadoTodos.asObservable();

  url =  environment.URL;

  eventosSubject = new BehaviorSubject<Evento[]>([]);
  eventosSubject$ = this.eventosSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  listenEventoMenuIconClick(valor: boolean) {
    this.menuIconClick.next(valor);
  }

  listenEventoSeleccionadoTodos(valor: boolean) {
    this.seleccionadoTodos.next(valor);
  }

  obtenerTodosEventos(): Observable<any> {
    return this.http.get<Evento[]>(`${this.url}/eventos`)
      .pipe(pluck('eventos'))
  }

  actualizarEventosAConfirmar(eventos) {
    return this.http.patch(`${this.url}/eventos`, eventos )
  }
}
