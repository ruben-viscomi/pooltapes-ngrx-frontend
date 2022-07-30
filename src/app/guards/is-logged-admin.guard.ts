import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { State } from 'src/app/reducers';
import { isLoggedAdmin, selectInfo } from 'src/app/modules/auth/auth.selectors';

import { Roles } from 'src/app/modules/auth/enums';
import { Admin, User } from 'src/app/modules/auth/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedAdminGuard implements CanActivate {

  constructor(private readonly store: Store<State>,
              private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    const role: Roles = route.data['role'];
    if (role === undefined) return this.store.select(isLoggedAdmin).pipe(
      catchError(err => {
        this.router.navigateByUrl('/');
        return throwError(err);
      })
    );

    return this.store.select(selectInfo).pipe(
      map((info: Admin | User) => {
        if ((<Admin>info).role === role) return true;
        return false;
      }),
      catchError(err => {
        this.router.navigateByUrl('/');
        return throwError(err);
      })
    );
  }

}
