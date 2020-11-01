// COMPONENTES
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeaderRegistroComponent } from './header-registro/header-registro.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { DireccionComponent } from './direccion/direccion.component';
import { ModalComponent } from './modal/modal.component';


// MÓDULOS

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent,
    DireccionComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent,
    DireccionComponent,
    ModalComponent,
  ],
  entryComponents: [ModalComponent],
})
export class ComponentsModule {}
