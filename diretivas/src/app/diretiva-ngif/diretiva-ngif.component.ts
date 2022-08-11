import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
