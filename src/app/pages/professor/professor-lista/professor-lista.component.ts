import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {

professores: [];

  constructor(
    private professorService: ProfessorService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.carregarProfessores();
  }

   carregarProfessores(){
    this.spinner.show();
    this.professorService.listar().then((obj) => {
      this.professores = obj;
      this.spinner.hide();
    });

  }

}
