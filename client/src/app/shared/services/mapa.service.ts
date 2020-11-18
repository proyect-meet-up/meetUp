import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Feature } from '../componentes/mapaRespuesta.model';


@Injectable({
  providedIn: 'root',
})
export class MapaService {
  urlMapbox = environment.mapbox.URL_MAPBOX;
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  zoom = 15;
  lat: number;
  lng: number;
  marker: mapboxgl.Marker;

  json = '.json';
  country = 'es';

  constructor(private http: HttpClient) {
    this.mapbox.accessToken = environment.mapbox.mapBoxToken;
  }

  crearMapa(respuestaLocalizacion: Feature) {
    [this.lng, this.lat] = respuestaLocalizacion.center;

    this.map = new mapboxgl.Map({
      container: 'map',
      zoom: this.zoom,
      style: this.style,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.añadirMarkerMapa();
  }

  añadirMarkerMapa() {
    this.marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
  }

  geocalizacion(localizacion: string) {
    let params = new HttpParams();
    params = params.append('country', this.country);
    // params = params.append('access_token', this.mapbox.accessToken);

    return this.http.get(
      `${this.urlMapbox}/mapbox.places/${localizacion}${this.json}`,
      { params }
    );
  }
}
