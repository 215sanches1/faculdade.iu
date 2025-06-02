import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { DisciplinaService } from '../disciplina.service';
import { Disciplina } from './../../core/models/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
   disciplina = new Disciplina();
   iddisc: number;
   salvando: boolean = false;
  constructor(
    private disciplinaService: DisciplinaService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private spinner: NgxSpinnerService
    
  ) { }

  ngOnInit() {
    this.iddisc = this.route.snapshot.params['id'];
   
    this.title.setTitle('Cadastro de Disciplina');

    if(this.iddisc){
      this.spinner.show();
      this.carregarDisciplina(this.iddisc);
    } else {
      this.disciplina.status = true;
    }
  }

  get editando() {
    return Boolean(this.disciplina.id);
  }

  carregarDisciplina(id: number){
      this.disciplinaService.buscarPorId(id)
      .then((obj) => {
        this.disciplina = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      }).catch((erro) => {
        this.spinner.hide();
       // this.errorHandler.handle(erro);
      })
  }

  atualizarTituloEdicao(){
     this.title.setTitle(`Edição de Disciplina:${this.disciplina.descricao}`)
  }

  salvar(form: NgForm){
    console.log(form);
    if(this.editando) {
      this.atualizarDisciplina(form);
    } else {
      this.cadastroDisciplina(form);
    }
  }

  cadastroDisciplina(form: NgForm){
    this.salvando = true;
    console.log(this.disciplina);
     this.disciplinaService.adicionar(this.disciplina).then((obj) => {
      this.messageService.add({severity:'success', summary:'Disciplina', detail:'cadastrado com sucesso!'});
      this.salvando = false;
      this.router.navigate(['/disciplinas']);
  });
  }

  atualizarDisciplina(form: NgForm){
    this.salvando = true;
    this.disciplinaService.atualizar(this.disciplina)
    .then((obj) => {
      this.disciplina = obj;
      this.salvando = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Disciplina',
        detail: `${obj.descricao}, alterado com sucesso`
      });
      this.atualizarTituloEdicao();
      this.router.navigate(['/disciplinas']);
    }).catch((erro) => {
      this.salvando = false;
    })

  }
}