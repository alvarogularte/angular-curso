import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  bsModalRef!: BsModalRef;

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private modalService: BsModalRef,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return EMPTY
      })
    );
    // this.service.list().subscribe(
    //   dados => {
    //     console.log(dados)
    //   },
    //   error => console.error(error),
    //   () => console.log('Observable completo')
    // )
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos, tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.content(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos, tente novamente mais tarde.';
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
