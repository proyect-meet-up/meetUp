
export class Direccion {

    constructor(
        public calle: string,
        public numero: string,
        public ciudad: string,
        public provincia: string,
        public codigo: string
    ) {}
}

export class Usuario {

    constructor(
      public nombre: string,
      public apellido: string,
      public email: string,
      public _id?: string,
        public rol?: string,
        public password?:string, // nuevo
        public imagen?: string, // nuevo
        public telefono?: string,
        public direccion?: Direccion
    ) { }

}
