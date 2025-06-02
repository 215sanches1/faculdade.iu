import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoRoutingModule } from './aluno.routing';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule ,
    AlunoRoutingModule
  ],
  declarations: [
    AlunoCadastroComponent,
    AlunoListaComponent
   
  ],
})
export class AlunoModule { }