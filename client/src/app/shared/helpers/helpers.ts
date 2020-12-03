import * as moment from 'moment';

export const quitarAcentos = (cadena) => {
  const acentos = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
  };
  return cadena
    .split('')
    .map((letra) => acentos[letra] || letra)
    .join('')
    .toString();
};

export const formartearFecha = (evento) => {
  return {
    ...evento,
    fecha: moment(evento.fecha).format('YYYY-MM-DD')
  };
}

export const diaDeHoy = () => {
  return moment(new Date(Date.now())).format('YYYY-MM-DD');
}


