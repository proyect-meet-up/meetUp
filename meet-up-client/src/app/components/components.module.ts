import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
