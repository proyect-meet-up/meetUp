import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  zoom = 15;
  lat = 40.9601446;
  lng = -5.6723312;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  crearMapa() {
    this.map = new mapboxgl.Map({
      container: 'map',
      zoom: this.zoom,
      style: this.style,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl())
  };
}
