import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'disciplinas',  // ou 'aluno/professores', se quiser deixar disciplinas como padrão
    pathMatch: 'full'
  },
  
 
  {
    path: 'disciplinas',
    loadChildren: () => 
      import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
  },

  {
    path: 'alunos',
    loadChildren: () => import('./pages/aluno/aluno.module').then(m => m.AlunoModule)
  },

  {
    path: 'professores',
    loadChildren: () => 
      import('./pages/professor/professor.module').then((m) => m.ProfessorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }