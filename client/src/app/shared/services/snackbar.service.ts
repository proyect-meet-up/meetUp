import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbarSubject = new Subject<any>();
  snackbarState$ = this.snackbarSubject.asObservable();

  constructor() {}

  mostrar(mensaje: string, tipo?: string) {
    this.snackbarSubject.next({
      mostrar: true,
      mensaje,
      tipo,
    });
  }
}
