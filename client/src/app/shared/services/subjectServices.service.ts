import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServicesService {

  clickBoton = new Subject<boolean>();
  clickBoton$ = this.clickBoton.asObservable();

  constructor() { }

  eventoClickBoton(value: boolean) {
    this.clickBoton.next(value)
  }



}
