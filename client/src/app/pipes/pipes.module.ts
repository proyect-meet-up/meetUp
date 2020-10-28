// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperLetterFisrtWordPipe } from './upper-letter-fisrt-word.pipe';

// Componentes


@NgModule({
  declarations: [
    UpperLetterFisrtWordPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UpperLetterFisrtWordPipe
  ]
})
export class PipesModule { }
