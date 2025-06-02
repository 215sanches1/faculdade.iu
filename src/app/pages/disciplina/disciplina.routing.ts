import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisciplinaCadastroComponent } from "./disciplina-cadastro/disciplina-cadastro.component";
import { DisciplinaListaComponent } from "./disciplina-lista/disciplina-lista.component";


const routes: Routes = [
    {
        path: '',
        component: DisciplinaListaComponent
    },
    {
        path: 'novo',
        component:  DisciplinaCadastroComponent
    },
    {
        path: ':id',
        component: DisciplinaCadastroComponent
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
   
})

export class DisciplinaRoutingModule {}