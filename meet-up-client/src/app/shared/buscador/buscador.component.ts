import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent {
  public greaterThanValue = 0;
  public lessThanValue = 1;
  public isInvalid: boolean = false;

  onChange(event: any): void {

    this.isInvalid = this.greaterThanValue > this.lessThanValue;
  }

  onSubmit(){
    console.log(this.greaterThanValue > this.lessThanValue);
  }
}
