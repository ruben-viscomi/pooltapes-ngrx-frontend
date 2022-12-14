import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

import { AuthComponent } from './auth.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent },
    { path: 'signup', component: UserSignupComponent }
  ] },
  { path: 'admin', children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AdminLoginComponent }
  ] }
];

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    AdminLoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    AuthComponent,
    RouterModule
  ]
})
export class AuthModule { }
