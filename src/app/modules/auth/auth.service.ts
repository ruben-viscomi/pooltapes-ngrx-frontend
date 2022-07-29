import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { State } from '../../reducers';
import { adminLoginSuccess, userLoginSuccess } from './auth.actions'

import { User, Admin } from './interfaces';
import { AdminLoginDto, UserLoginDto } from './dto';
import { Roles } from './enums';

const adminClientRoutes: Array<string> = [
  '/content-client',
  '/accounting-client',
  '/technical-client',
  '/user-support-client'
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient,
              private readonly store: Store<State>,
              private readonly router: Router) {
    const handshake$: Subscription = this.handshake().pipe(
      tap((authenticated: Admin | User) => {
        if((<Admin>authenticated).role !== undefined)
          this.store.dispatch(adminLoginSuccess({ admin: <Admin>authenticated }));
        else
          this.store.dispatch(userLoginSuccess({ user: <User>authenticated }));
      })
    ).subscribe({
      error: (err: string) => console.log(err),
      complete: () => handshake$.unsubscribe()
    });
  }

  adminLogin(credentials: AdminLoginDto): Observable<Admin> {
    return this.http.post<Admin>('http://localhost:3010/admin/access', credentials, { withCredentials: true });
  }

  userLogin(credentials: UserLoginDto): Observable<User> {
    return this.http.post<User>('http://localhost:3010/users/login', credentials, { withCredentials: true });
  }

  logout(): Observable<void> {
    return this.http.post<void>('http://localhost:3010/users/logout', {}, { withCredentials: true });
  }

  handshake(): Observable<User | Admin> {
    return this.http.get<User | Admin>('http://localhost:3010/handshake', { withCredentials: true });
  }

  redirectToUserClient(): void {
    this.router.navigateByUrl('/client');
  }

  redirectToAdminClient(admin: Admin): void {
    this.router.navigateByUrl(adminClientRoutes[admin.role]);
  }

  redirectToIndex(): void {
    this.router.navigateByUrl('/');
  }

}
