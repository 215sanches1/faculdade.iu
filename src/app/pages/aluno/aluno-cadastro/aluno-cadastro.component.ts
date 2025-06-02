import { Component } from '@angular/core';
import { Aluno } from '../../core/models/aluno.model'; // Importa o modelo
import { AlunoService } from '../aluno.service'; // Importa o serviço

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
})

export class AlunoCadastroComponent {
  aluno: Aluno = new Aluno(); // Cria um objeto aluno vazio para o formulário
salvando: any;

  constructor(private alunoService: AlunoService) {}

  // Quando o formulário for enviado
  salvar() {
    this.alunoService.adicionar(this.aluno); // Adiciona o novo aluno
    alert('Aluno cadastrado com sucesso!');
    this.aluno = new Aluno(); // Limpa o formulário
  }
}