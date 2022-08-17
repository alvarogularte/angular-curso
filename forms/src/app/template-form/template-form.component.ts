import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any) {
    cep = cep.replace(/\D/g, '');
    console.log('logando depois do replace', cep);

    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      console.log('logando validacep', validacep);


      if (validacep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => console.log(dados))
      }
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
