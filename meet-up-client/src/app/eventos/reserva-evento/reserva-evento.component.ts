import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-reserva-evento',
  templateUrl: './reserva-evento.component.html',
  styleUrls: ['./reserva-evento.component.scss']
})


export class ReservaEventoComponent implements OnInit{

  evento: Evento;
  id: number;
  person: any; // SIMULACIÓN CUANDO TENGAMSO EL OBJECTO USER


  constructor( private route: ActivatedRoute, private eventosService: EventoService) {
    this.id = +this.route.snapshot.params['id'];
    this.evento = this.eventosService.obtenerEvento(this.id);
    this.person = {
      nombre: 'Borja'
    }
  }

  ngOnInit(): void {
  }



}
