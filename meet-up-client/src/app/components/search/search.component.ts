import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
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
