import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MapaService } from '@shared/componentes/services/mapa.service';
import { pluck } from 'rxjs/operators';
import { Feature } from '../mapaRespuesta.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {
  map;
  @Input('direccion') direccion;

  constructor(private mapaService: MapaService) {}

  ngOnInit(): void {
    this.geolocalizarDireccion();
  }

  ngAfterViewInit(): void {}

  inicializacionMapa(respuestaLocalizacion: Feature): void {
    this.map = this.mapaService.crearMapa(respuestaLocalizacion);
  }

  geolocalizarDireccion() {
    this.mapaService
      .geocalizacion(this.direccion)
      .pipe(pluck('features'))
      .subscribe((data: Feature) => {
        this.inicializacionMapa(data[0]);
      });
  }
}

