
export class Direccion {

    constructor(
        public calle: string,
        public numero: string,
        public ciudad: string,
        public provincia: string,
        public codigoPostal: string
    ) {}
}

export class Usuario {

    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        public direccion?: Direccion
    ) { }

}
