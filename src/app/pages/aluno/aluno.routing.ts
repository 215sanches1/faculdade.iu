import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoCadastroComponent } from "./aluno-cadastro/aluno-cadastro.component";
import { AlunoListaComponent } from "./aluno-lista/aluno-lista.component";


const routes: Routes = [
    {
        path: '',
        component: AlunoListaComponent
    },
    {
        path: 'novo',
        component:  AlunoCadastroComponent
    },
    {
        path: ':id',
        component: AlunoCadastroComponent
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
   
})

export class AlunoRoutingModule {}