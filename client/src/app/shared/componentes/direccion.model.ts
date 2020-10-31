export interface ProvinciaResponse {
  provincia: string,
  texto: string,
  ccaa?: string,
  codigo: string,
  cod_ccaa?: string,
  geo_point_2d?: number[],
  geo_shape?: {
    type: "MultiPolygon",
    coordinates: number[]
  }
}

export class Direccion {

  constructor(
    public calle: string,
    public numero: number,
    public codigo: string,
    public lcoalidad?: string,
    public municipio?: string
  ) {}
}
