import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../../core/models/aluno.model';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html'
})
export class AlunoListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunos = this.alunoService.listar(); // busca alunos do serviço
  }
}