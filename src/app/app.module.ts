import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { IsLoggedUserGuard } from './guards/is-logged-user.guard';

import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
// import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./modules/user-client/user-client.module')
      .then(module => module.UserClientModule),
    canActivate: [IsLoggedUserGuard]
  },
  {
    path: 'content-client',
    loadChildren: () => import('./modules/content-client/content-client.module')
      .then(module => module.ContentClientModule)
  },
  {
    path: 'accounting-client',
    loadChildren: () => import('./modules/accounting-client/accounting-client.module')
      .then(module => module.AccountingClientModule)
  },
  {
    path: 'technical-client',
    loadChildren: () => import('./modules/technical-client/technical-client.module')
      .then(module => module.TechnicalClientModule)
  },
  {
    path: 'user-support-client',
    loadChildren: () => import('./modules/user-support-client/user-support-client.module')
      .then(module => module.UserSupportClientModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // ↓ NOTE: always configure (forRoot()) this module the last.
    RouterModule.forRoot(routes),
    // EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
