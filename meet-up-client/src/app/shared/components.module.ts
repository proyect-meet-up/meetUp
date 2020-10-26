// COMPONENTES

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { HeaderRegistroComponent } from './header-registro/header-registro.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

// MÓDULOS

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from "@angular/material/tabs";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent
  ],
})
export class ComponentsModule {}
