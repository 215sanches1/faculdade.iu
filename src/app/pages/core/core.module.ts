import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PrimengModule } from 'src/app/primeng.module';
import { DisciplinaService } from '../disciplina/disciplina.service';
import { ProfessorService } from '../professor/professor.service';
import { ErrorHandlerService } from './errorHandler.service';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  imports: [PrimengModule, RouterModule, ToastModule],
  providers: [ConfirmationService, MessageService, DisciplinaService, ProfessorService, ErrorHandlerService],

  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule {}