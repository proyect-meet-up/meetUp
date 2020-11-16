export interface DataResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  address?: string;
  context: Context[];
}

export interface Context {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
  interpolated?: boolean;
}

export interface Properties {
  accuracy: string;
}

export interface MapaQuery {
  numero: string;
  calle: string;
  codigoPostal?: string;
  ciudad?: string;
  provincia?: string;
  pais: string | 'España';
}
