import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';

import { AuthService } from './auth.service';
import { User, Admin } from './interfaces';

@Injectable()
export class AuthEffects {

  attemptUserLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.userLogin),
    exhaustMap(action => (
      this.auth.userLogin(action.credentials).pipe(
        map((user: User) => AuthActions.userLoginSuccess({ user })),
        catchError((error: string) => of(AuthActions.userLoginFail({ error })))
      ))
    )
  ));

  userLoginSuccessRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.userLoginSuccess),
    tap(() => this.auth.redirectToUserClient())
  ), { dispatch: false });

  attemptUserSignup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.userSignup),
    exhaustMap(action => (
      this.auth.userSignup(action.userInfo).pipe(
        map(() => AuthActions.userSignupSuccess()),
        catchError((error: string) => of(AuthActions.userSignupFail({ error })))
      )
    ))
  ));

  attemptAdminLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.adminLogin),
    exhaustMap(action => (
      this.auth.adminLogin(action.credentials).pipe(
        map((admin: Admin) => AuthActions.adminLoginSuccess({ admin })),
        catchError((error: string) => of(AuthActions.adminLoginFail({ error })))
      ))
    )
  ));

  adminLoginSuccessRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.adminLoginSuccess),
    tap(({ admin }) => this.auth.redirectToAdminClient(admin))
  ), { dispatch: false });

  attemptLogout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    exhaustMap(() => (
      this.auth.logout().pipe(
        map(() => AuthActions.logoutSuccess()),
        catchError(() => of(AuthActions.logoutFail()))
      )
    ))
  ));

  logoutSuccessRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logoutSuccess),
    tap(() => this.auth.redirectToIndex())
  ), { dispatch: false });

  constructor(private readonly actions$: Actions,
              private readonly auth: AuthService) {}
}
