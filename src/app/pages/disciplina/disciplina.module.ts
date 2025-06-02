 import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { PrimengModule } from 'src/app/primeng.module';
 import { SharedModule } from '../shared/shared.module';
 import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
 import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
 import { DisciplinaRoutingModule } from './disciplina.routing';
 
 
 
 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     DisciplinaRoutingModule,
     PrimengModule,
     SharedModule
   ],
   declarations: [
   DisciplinaCadastroComponent,
   DisciplinaListaComponent
   ]
 })
 export class DisciplinaModule { }