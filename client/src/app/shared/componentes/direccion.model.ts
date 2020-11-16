export interface ProvinciaResponse {
  provincia: string;
  texto: string;
  ccaa?: string;
  codigo: string;
  cod_ccaa?: string;
  geo_point_2d?: number[];
  geo_shape?: {
    type: 'MultiPolygon';
    coordinates: number[];
  };
}

export class Direccion {
  constructor(
    public calle: string,
    public numero: number | string,
    public codigo: string,
    public ciudad?: string,
    public provincia?: string
  ) {}
}
