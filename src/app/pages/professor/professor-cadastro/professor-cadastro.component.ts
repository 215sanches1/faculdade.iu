import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ProfessorService } from '../professor.service';
import { Professor } from '../../core/models/professor.model';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})
export class ProfessorCadastroComponent implements OnInit {
   professor = new Professor();
   idprof?: number;
   salvando: boolean = false;
  constructor(
    private professorService: ProfessorService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private spinner: NgxSpinnerService
    
  ) { }

  ngOnInit() {
    this.idprof = this.route.snapshot.params['id'];
   
    this.title.setTitle('Cadastro de Professor');

    if(this.idprof){
      this.spinner.show();
      this.carregarProfessor(this.idprof);
    } else {
      this.professor.status = true;
    }
  }

  get editando() {
    return Boolean(this.professor.id);
  }

  carregarProfessor(id: number){
      this.professorService.buscarPorId(id)
      .then((obj) => {
        this.professor = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      }).catch((erro) => {
        this.spinner.hide();
       // this.errorHandler.handle(erro);
      })
  }

  atualizarTituloEdicao(){
     this.title.setTitle(`Edição de Professor:${this.professor.nome}`)
  }

  salvar(form: NgForm){
    console.log(form);
    if(this.editando) {
      this.atualizarProfessor(form);
    } else {
      this.cadastroProfessor(form);
    }
  }

  cadastroProfessor(form: NgForm){
    this.salvando = true;
    console.log(this.professor);
     this.professorService.adicionar(this.professor).then((obj) => {
      this.messageService.add({severity:'success', summary:'Professor', detail:'cadastrado com sucesso!'});
      this.salvando = false;
      this.router.navigate(['/professores']);
  });
  }
  
  atualizarProfessor(form: NgForm){
    this.salvando = true;
    this.professorService.atualizar(this.professor)
    .then((obj) => {
      this.professor = obj;
      this.salvando = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Professor',
        detail: `${obj.nome}, alterado com sucesso`
      });
      this.atualizarTituloEdicao();
      this.router.navigate(['/professores']);
    }).catch((erro) => {
      this.salvando = false;
    })

  }
}