import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { EventosReservados} from '../reservas.model';
import { Observable, Subscription } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.scss'],
  animations: [
    trigger('botonState', [
      state(
        'inactivo',
        style({
          height: '0',
        })
      ),
      state(
        'activo',
        style({
          minHeight: '100px',
        })
      ),
      transition(
        'inactivo => activo',
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)')
      ),
      transition('activo => inactivo', animate('500ms ease-out')),
    ]),
  ],
})
export class CardAdminComponent implements OnInit , OnDestroy{
  state: string = 'inactivo';
  expanded: boolean = false;

  @Input('eventoData') evento: EventosReservados;
  @Input('index') indexEvento: number;


  seleccionado: boolean = false;
  sub: Subscription;

  @Output() eventoSelection$: EventEmitter<any> = new EventEmitter();

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.sub = this.adminService.seleccionadoTodos$.subscribe( data => {
      this.seleccionado = data;
    })
  }

  expandirPanel() {
    this.state = this.state === 'activo' ? 'inactivo' : 'activo';
    this.expanded = !this.expanded;
  }

  cambioEventoSeleccionado() {
    this.seleccionado = !this.seleccionado;
    this.eventoSelection$.emit(this.evento);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
