import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return ['Angular 2', 'Java', 'Javascript'];
  }

  constructor() { }
}
