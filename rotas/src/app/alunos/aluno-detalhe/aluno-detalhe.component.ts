import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];

    //   this.aluno = this.alunosService.getAluno(id);
    // });

    console.log(this.route);

    this.inscricao = this.route.data.subscribe(
      (info: {aluno?: Aluno}) => {
        if (info?.aluno) {
          this.aluno = info.aluno
        }
    })

  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
