// COMPONENTES

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BuscadorComponent } from "./buscador/buscador.component";

// MÓDULOS

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscadorComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, BuscadorComponent],
})
export class ComponentsModule {}
