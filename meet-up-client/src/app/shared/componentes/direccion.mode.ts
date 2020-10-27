import { stringify } from 'querystring';

export class Direccion {

  constructor(
    public calle: string,
    public numero: number,
    public codigo: string,
    public lcoalidad?: string,
    public municipio?: string
  ) {}
}
