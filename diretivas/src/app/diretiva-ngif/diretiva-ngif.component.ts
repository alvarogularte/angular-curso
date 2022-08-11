import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgIfComponent implements OnInit {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
