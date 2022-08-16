import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class AlunosGuard implements CanActivateChild {

  constructor() { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) {

    if (state.url.includes('editar')) {
      // alert('Usuário sem acesso');
      // return of(false);
    }

    return true;
  }
}
