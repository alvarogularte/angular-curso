import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados)
      );
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any) {
    cep = cep.replace(/\D/g, '');
    console.log('logando depois do replace', cep);

    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      console.log('logando validacep', validacep);


      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => this.populaDadosForm(dados, form))
      }
    }
  }

  populaDadosForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(formulario: any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
