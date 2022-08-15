import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos/cursos.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

// Achei aqui: https://stackoverflow.com/questions/62755093/angular-error-generic-type-modulewithproviderst-requires-1-type-arguments
// Como corrigir erro de tipo do ModuleWithProviders que agora exige um tipo generico
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
