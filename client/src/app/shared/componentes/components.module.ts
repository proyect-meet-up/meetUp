// COMPONENTES
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeaderRegistroComponent } from './header-registro/header-registro.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { DireccionComponent } from './direccion/direccion.component';
import { ModalComponent } from './modal/modal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';



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
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent,
    DireccionComponent,
    ModalComponent,
    SidenavComponent,
    HeaderAdminComponent,
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
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    HeaderRegistroComponent,
    TabGroupComponent,
    DireccionComponent,
    ModalComponent,
    SidenavComponent,
    HeaderAdminComponent
  ],
  entryComponents: [ModalComponent],
  providers: [{ provide: MatDialogRef, useValue: {} }],
})
export class ComponentsModule {}
