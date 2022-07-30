import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { State } from 'src/app/reducers';
import { isLoggedUser } from 'src/app/modules/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedUserGuard implements CanActivate {

  constructor(private readonly store: Store<State>,
              private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(isLoggedUser).pipe(
      catchError(err => {
        this.router.navigateByUrl('/');
        return throwError(err);
      })
    );
  }

}
