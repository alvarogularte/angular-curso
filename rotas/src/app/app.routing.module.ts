import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./cursos/guards/cursos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

// Mudança na forma de utilizar loadChildren -- fonte: https://stackoverflow.com/questions/70313032/type-string-is-not-assignable-to-type-loadchildrencallback

const APP_ROUTES: Routes = [
  { path: 'cursos',
      loadChildren: () => import('../app/cursos/cursos.module')
        .then(x => x.CursosModule),
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
    },
  { path: 'alunos',
      loadChildren: () => import('../app/alunos/alunos.module')
        .then(x => x.AlunosModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]
    },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
