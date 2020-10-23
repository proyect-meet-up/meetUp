// COMPONENTES

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { HeaderRegistroComponent } from './header-registro/header-registro.component';

// MÓDULOS

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
  ],
})
export class ComponentsModule {}
