import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso:nome'] - caso não queira utilizar o decorator @Input (utilizar preferencialmente o decorator)
})
export class InputPropertyComponent implements OnInit {

  @Input('nome')  nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
