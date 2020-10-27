export interface EventosReservados {
  nombre: string;
  titulo: string;
  fechaReserva: Date;
  direccion: string;
  descripcion: string;
  confirmados?: boolean;
}

 export const eventosReservados: EventosReservados[] = [
   {
     nombre: 'Fulanito',
     titulo: 'Hydrogen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'H',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Helium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'He',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Lithium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Li',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Beryllium',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Be',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Boron',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'B',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Carbon',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'C',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Nitrogen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'N',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Oxygen',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'O',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Fluorine',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'F',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     nombre: 'Fulanito',
     titulo: 'Neon',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'Ne',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
 ];
