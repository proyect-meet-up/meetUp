export interface EventosReservados {
  id: number,
  nombre: string;
  titulo: string;
  fechaReserva: Date;
  direccion: string;
  descripcion: string;
  confirmados?: boolean;
}

 export const eventosReservados: EventosReservados[] = [
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Hydrogen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'H',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Helium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'He',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Lithium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Li',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Beryllium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Be',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Boron',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'B',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Carbon',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'C',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Nitrogen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'N',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Oxygen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'O',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Fluorine',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'F',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     nombre: 'Fulanito',
     titulo: 'Neon',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Ne',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
 ];
