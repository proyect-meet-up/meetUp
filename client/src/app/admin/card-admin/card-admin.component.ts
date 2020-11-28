import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { EventosReservados} from '../reservas.model';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { botonState } from '@shared/componentes/animations/animation';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.scss'],
  animations: [ botonState],
})
export class CardAdminComponent implements OnInit , OnDestroy{
  state: string = 'inactivo';
  expanded: boolean = false;

  @Input('eventoData') evento: EventosReservados;
  @Input('index') indexEvento: number;


  seleccionado: boolean = false;
  sub: Subscription;

  @Output() eventoSelection$: EventEmitter<EventosReservados> = new EventEmitter();

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.sub = this.adminService.seleccionadoTodos$.subscribe( (data: boolean) => {
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
