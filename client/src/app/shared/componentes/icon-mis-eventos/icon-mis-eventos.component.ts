import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/eventos/evento.service';

@Component({
  selector: 'app-icon-mis-eventos',
  templateUrl: './icon-mis-eventos.component.html',
  styleUrls: ['./icon-mis-eventos.component.scss'],
})
export class IconMisEventosComponent implements OnInit {
  total: number;
  @Input('url') rolTemplate: string;
  @Output() numEventos$: EventEmitter<number> = new EventEmitter();

  constructor(
    private eventoService: EventoService,
    private router: Router

    ) {}

  ngOnInit() {
    this.eventoService
      .getEventosDelUsuario('total')
      .subscribe(( data: number ) => {
        this.total = data;
        this.numeroEventosUsuario(data)
      });
  }

  numeroEventosUsuario( param: number ) {
     this.numEventos$.emit( param );
  }

  irListaMisEventos() {
    if ( this.rolTemplate === 'admin') {
      this.router.navigate(['admin', 'eventos', 'usuario']);
    } else {
      this.router.navigate(['privado', 'eventos', 'usuario'])
    }
  }
}
