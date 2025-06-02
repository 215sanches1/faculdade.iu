import { Injectable } from '@angular/core'; // Permite injetar o serviço no Angular
import { Aluno } from '../core/models/aluno.model'; // Modelo do aluno
import { ALUNOSMOCK } from './aluno.mock'; // Dados simulados (mock)

@Injectable({
  providedIn: 'root' // Disponibiliza o serviço em toda a aplicação
})
export class AlunoService {
  // Clona os dados do mock para não modificar o original
  private alunos: Aluno[] = structuredClone(ALUNOSMOCK);

  // Retorna todos os alunos cadastrados
  listar(): Aluno[] {
    return this.alunos;
  }

  // Adiciona um novo aluno na lista
  adicionar(aluno: Aluno): void {
    // Gera um novo ID com base no último
    const novoId = this.alunos.length > 0
      ? Math.max(...this.alunos.map(a => a.idaluno ?? 0)) + 1
      : 1;

    const agora = new Date(); // Pega a data e hora atual

    // Cria um novo aluno preenchendo os campos automaticamente
    const novoAluno: Aluno = {
      ...aluno, // copia os dados do formulário
      idaluno: novoId,
      datacriacao: agora,
      dataalteracao: agora,
      usucriacao: 'usuario_atual', // simulação do usuário logado
      usualteracao: 'usuario_atual'
    };

    this.alunos.push(novoAluno); // Adiciona na lista
  }
}