import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from '../../header/header.module';

import { DashResolver } from './resolvers/dash.resolver';

import { UserClientComponent } from './user-client.component';
import { DashComponent } from './components/dash/dash.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: UserClientComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashComponent, resolve: { dash: DashResolver } },
    { path: 'movies', component: DashComponent, resolve: { dash: DashResolver } },
    { path: 'series', component: DashComponent, resolve: { dash: DashResolver } },
    { path: 'favorites', component: FavoritesComponent }
  ] }
];

@NgModule({
  declarations: [
    UserClientComponent,
    DashComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [
    UserClientComponent,
    RouterModule
  ]
})
export class UserClientModule { }
