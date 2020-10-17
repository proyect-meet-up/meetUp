import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLetterFisrtWord'
})
export class UpperLetterFisrtWordPipe implements PipeTransform {

  transform(value: string): string {
    let firstLetter = value.split(' ')[0].charAt(0).toUpperCase();
    return firstLetter + value.substr(1);
  }

}
