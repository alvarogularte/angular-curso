import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   map((params: any) => params.id),
    //   switchMap(id => this.service.loadById(id)),
      // switchMap(cursos => obterAulas)
    // ).subscribe(curso => this.updateForm(curso));

    // concatMap -> ordem da requisição importa.
    // mergeMap -> ordem não importa.
    // exhaustMap -> casos de login.

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [null],
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ]]
    })
  }

  // updateForm(curso: any) {
  //   this.form.patchValue({
  //     nome: curso.nome,
  //     id: curso.id,
  //   })
  // }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      this.service.create(this.form.value)
      .subscribe({
        next: success => {
          this.modal.showAlertSuccess('Curso criado com sucesso!');
          this.location.back();
        },
        error: error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente.'),
        complete: () => console.log('request completo'),
      }
      );
    }
  }


  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
