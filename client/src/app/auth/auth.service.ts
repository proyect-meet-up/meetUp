import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();

  esAdmin = new BehaviorSubject(false);
  esAdmin$ = this.esAdmin.asObservable();


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
