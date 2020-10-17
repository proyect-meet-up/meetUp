import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss']
})
export class CardEventoComponent implements OnInit {

@Input() curso: Evento;
@Input() index: number;

  constructor() { }

  ngOnInit(): void {
    
  }

}
