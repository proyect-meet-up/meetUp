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
import { MenuTogglerComponent } from './menuToggler/menuToggler.component';
import { MapaComponent } from './mapa/mapa.component';




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
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SnackbarComponent } from './snackbar/snackbar.component';



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
    MenuTogglerComponent,
    MapaComponent,
    SnackbarComponent
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
    MatListModule,
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
    HeaderAdminComponent,
    MenuTogglerComponent,
    MapaComponent,
    SnackbarComponent
  ],
  entryComponents: [ModalComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
})
export class ComponentsModule {}
