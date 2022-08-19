import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { Curso } from '../cursos';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService) { }

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
}
