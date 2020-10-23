import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();


  login(valor: boolean) {
    this.estaLogueadoSource.next(valor);
  }

  logout(valor: boolean) {
    this.estaLogueadoSource.next(valor);
  }

}
