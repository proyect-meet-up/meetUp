// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperLetterFisrtWordPipe } from './upper-letter-fisrt-word.pipe';
import { FormatoFechaPipe } from './formatoFecha.pipe';

// Componentes


@NgModule({
  declarations: [
    UpperLetterFisrtWordPipe,
    FormatoFechaPipe
   ],
  imports: [
    CommonModule
  ],
  exports: [
    UpperLetterFisrtWordPipe,
    FormatoFechaPipe
  ]
})
export class PipesModule { }
