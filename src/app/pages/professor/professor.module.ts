 import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { PrimengModule } from 'src/app/primeng.module';
 import { SharedModule } from '../shared/shared.module';
 import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
 import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
 import { ProfessorRoutingModule } from './professor.routing';
 
 
 
 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     ProfessorRoutingModule,
     PrimengModule,
     SharedModule
   ],
   declarations: [
   ProfessorCadastroComponent,
   ProfessorListaComponent
   ]
 })
 export class ProfessorModule { }