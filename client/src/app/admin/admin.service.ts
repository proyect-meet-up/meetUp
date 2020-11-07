import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  menuIconClick = new Subject<boolean>();
  menuIconClick$ = this.menuIconClick.asObservable();

  seleccionadoTodos = new Subject<boolean>();
  seleccionadoTodos$ = this.seleccionadoTodos.asObservable();

  constructor() {}

  listenEventoMenuIconClick(valor: boolean) {
    this.menuIconClick.next(valor);
  }

  listenEventoSeleccionadoTodos(valor: boolean) {
    this.seleccionadoTodos.next(valor);
  }
}
