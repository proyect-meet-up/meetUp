import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
