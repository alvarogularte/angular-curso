import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private _cursos: string[] = ['Angular 2', 'Java', 'Javascript'];

  constructor() {
    console.log('');
  }

  getCursos() {
    return this._cursos;
  }

  addCurso(curso: string) {
    this._cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
