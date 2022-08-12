import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private _cursos: string[] = ['Angular 2', 'Java', 'Javascript'];

  constructor() {
    console.log('');
  }

  getCursos() {
    return this._cursos;
  }

  addCurso(curso: string) {
    this._cursos.push(curso);
  }
}
