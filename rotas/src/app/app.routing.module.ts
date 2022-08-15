import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

// Mudança na forma de utilizar loadChildren -- fonte: https://stackoverflow.com/questions/70313032/type-string-is-not-assignable-to-type-loadchildrencallback

const APP_ROUTES: Routes = [
  { path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module')
      .then(x => x.CursosModule)},
  { path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module')
      .then(x => x.AlunosModule)},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
