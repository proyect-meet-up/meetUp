export interface EventosReservados {
  id: number,
  usuario: string;
  titulo: string;
  fechaReserva: Date;
  direccion: string;
  descripcion: string;
  confirmados?: boolean;
}

 export const eventosReservados: EventosReservados[] = [
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Gonzalo',
     titulo: 'Curso de alta cocina',
     fechaReserva: new Date(2021, 2, 17),
     direccion: 'Calle alcala , 23 Madrid ',
     descripcion:
       'ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Borja',
     titulo: 'Visión de películas de Sean Connery',
     fechaReserva: new Date(2021, 2, 9),
     direccion: 'Calle de Juan Ramón Jimenez 19 , Madrid',
     descripcion:
       'unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but ',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Fulanito',
     titulo: 'prácticas de tenis',
     fechaReserva: new Date(2022, 1, 12),
     direccion: 'calle albornoz, 12',
     descripcion:
       'unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but ',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Fulanito',
     titulo: 'curso física cuántica',
     fechaReserva: new Date(2021, 6, 17),
     direccion: 'Avenida de Valladolid, 30',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Pepe',
     titulo: 'Boron',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'B',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Trump',
     titulo: 'como ser el mayor gilipollas...',
     fechaReserva: new Date(2021, 12, 1),
     direccion: 'calle Palomeras, 14',
     descripcion:
       ' sdfksdlf ksldkflñsdkfñlsdk sdlfkñlsdkf ñlsdkflñsdkf ñlsdk ñlfksdñlfksdñlfksñldfksñldkf',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Manolo',
     titulo: 'curso desarrollo y maquetación html',
     fechaReserva: new Date(2021, 11, 30),
     direccion: 'carretera de El Escorial s/n',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Diego',
     titulo: 'Hablar sobre la realidad del cosmos',
     fechaReserva: new Date(2020, 11, 17),
     direccion: 'O',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Pablo',
     titulo: 'Taller de robótica con Arduino',
     fechaReserva: new Date(2021, 9, 3),
     direccion: 'calle Pepa, 28',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
   {
     id: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
     usuario: 'Fulanito',
     titulo: 'Trabajos con ovillos de lana',
     fechaReserva: new Date(2021, 4, 28),
     direccion: 'calle Verdaver, 132',
     descripcion: 'dskfjklsdjflksdjflksdjflksdjflksdjkfl',
   },
 ];
