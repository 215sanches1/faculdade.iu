import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css']
})
export class DisciplinaListaComponent implements OnInit {
  
  disciplinas = [];
  
  constructor(
    private disciplinaService: DisciplinaService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(){
    this.spinner.show();
    this.disciplinaService.listar().then((obj) => {
      this.disciplinas = obj;
      this.spinner.hide();
    });
  }

}