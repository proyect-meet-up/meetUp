
export class Evento {

    constructor(
      public titulo: string,
      public descripcion: string,
      public direccion: string,
      public tipo: string,
      public uid: number,
      public imagen?: string
      //public fecha: string,
    ) {}

  }


  export const eventos: Evento[] = [
    {
      titulo: "curso javascript",
      descripcion:
        "Mollit consectetur aliquip laborum dolore exercitation voluptate irure nisi reprehenderit cillum magna. Ea ipsum ex sint cupidatat. Velit voluptate non veniam aliqua mollit cupidatat eiusmod nisi quis cupidatat culpa. ",
      direccion: "calle albornoz, 12",
      tipo: "informática y programación",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "prácticas de tenis",
      descripcion:
        "Culpa culpa exercitation cillum magna. Fugiat nulla esse cupidatat reprehenderit excepteur ad irure consequat anim quis exercitation dolore. Consequat elit dolor laboris Lorem. Labore magna irure veniam fugiat. ",
      direccion: "calle Santibañez, 7",
      tipo: "informática y programación",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "taller preparación bocata de mortadela",
      descripcion:
        "Nisi ex cillum laboris minim magna duis irure eu. Nulla incididunt ea magna irure dolor velit culpa mollit. Non exercitation tempor tempor tempor. Enim id occaecat aliquip deserunt fugiat nostrud deserunt adipisicing.",
      direccion: "calle Serrano, 39",
      tipo: "informática y programación",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "cocina creativa",
      descripcion:
        "Non magna anim culpa dolor. Minim enim sint aliqua laboris ipsum aliquip enim sint ea anim reprehenderit excepteur culpa. Consectetur est dolor aliquip consequat adipisicing aliquip duis ea id minim reprehenderit. Culpa aliqua laborum id mollit cillum consectetur dolore proident voluptate irure. ",
      direccion: "calle albornoz, 12",
      tipo: "cocina y restauración",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "curso física cuántica",
      descripcion:
        "Esse minim proident culpa amet mollit nostrud dolore pariatur elit nostrud sint qui sit. Exercitation sunt occaecat officia adipisicing culpa esse Lorem do. Ex culpa ullamco aute proident ea sit dolore officia in magna. Reprehenderit ex sit ipsum est sunt eu duis fugiat. ",
      direccion: "Avenida de Valladolid, 30",
      tipo: "divulgación y ciencia",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "café con inglés",
      descripcion:
        "Nisi voluptate et ea in nostrud reprehenderit. Occaecat commodo occaecat magna ad aliqua tempor voluptate non. Veniam veniam ad in sunt. Ipsum cillum sit sint pariatur dolore Lorem eiusmod deserunt qui excepteur ullamco occaecat dolore. Adipisicing cupidatat labore dolor deserunt veniam incididunt excepteur ipsum consectetur dolor commodo reprehenderit. ",
      direccion: "calle Claudio Coello, 22",
      tipo: "idiomas",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "salida a la sierra y observación astronómica",
      descripcion:
        "Cillum commodo officia culpa eiusmod velit ad sit fugiat culpa veniam nulla. Anim laboris sit fugiat non Lorem ex aliquip sint fugiat. Sint aliquip qui laborum ut et exercitation proident irure fugiat proident et amet nulla do. Sint sint et do dolore aliqua laboris non sint Lorem ea. ",
      direccion: "calle Palomeras, 14",
      tipo: "deportes, ocio y naturaleza",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "curso desarrollo y maquetación html",
      descripcion:
        "Aliquip nulla excepteur commodo aliquip fugiat irure consequat do mollit esse. Est tempor incididunt nulla consequat magna Lorem tempor laborum do. Voluptate fugiat irure aute reprehenderit eiusmod in. Non nulla irure non ullamco sunt deserunt aute ad aliqua proident aute excepteur. ",
      direccion: "calle Verdaver, 132",
      tipo: "informática y programación",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "Trabajos con ovillos de lana",
      descripcion:
        "Id commodo nisi ullamco amet laboris consequat cupidatat Lorem amet excepteur labore. Incididunt sint esse anim veniam incididunt labore consequat ut. Enim pariatur exercitation proident ea ullamco laboris. Exercitation officia minim dolor et elit aliquip amet irure nulla fugiat reprehenderit ullamco irure. Proident eiusmod reprehenderit fugiat nulla non est laborum tempor nostrud est. ",
      direccion: " carretera de El Escorial s/n",
      tipo: "decoración, manualidades y labores",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
    {
      titulo: "Taller de robótica con Arduino",
      descripcion:
        "Laboris ex irure anim in et ipsum dolore dolore duis elit labore. Nulla mollit id esse culpa tempor dolore exercitation laborum. Eiusmod officia culpa exercitation ex incididunt laborum magna amet. Aute labore minim qui veniam dolore ipsum in officia esse non. Velit ullamco anim non velit officia eu fugiat ut duis commodo nulla Lorem esse duis. Nulla aliquip id nulla incididunt adipisicing dolor nostrud nisi qui Lorem amet consectetur in sunt. ",
      direccion: "calle Pepa, 28",
      tipo: "informática y programación",
      imagen: "https://source.unsplash.com/random/800x600",
      uid: Number((Math.random() * (200 - 1) + 1).toFixed(0)),
    },
  ];
