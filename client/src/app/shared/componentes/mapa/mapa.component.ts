import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MapaService } from '@shared/componentes/services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {
  map;

  @Input('direccion') result;


  constructor(private mapaService: MapaService) {}

  ngOnInit(): void {
    this.inicializacionMapa();
  }

  ngAfterViewInit(): void {

  }

  inicializacionMapa(): void {
    this.map = this.mapaService.crearMapa();

  }
}
