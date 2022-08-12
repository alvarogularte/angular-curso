import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;

  tamanhoFonte: number = 14;

  constructor() { }

  ngOnInit(): void {
    console.log('');
  }

  onClick() {
    this.ativo = !this.ativo;
  }

}
