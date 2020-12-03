import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha',
})
export class FormatoFechaPipe implements PipeTransform {
  constructor() {
    moment.locale('es');
  }

  transform( fecha: Date | string , formatoFecha: string ): any {
    return moment(fecha).format(formatoFecha)
  }
}
