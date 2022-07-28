import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserClientComponent } from './user-client.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { MoviesDashComponent } from './movies-dash/movies-dash.component';
import { SeriesDashComponent } from './series-dash/series-dash.component';
import { FavoritesDashComponent } from './favorites-dash/favorites-dash.component';

import { HeaderComponent } from '../../components/header/header.component';

const routes: Routes = [
  { path: '', component: UserClientComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeDashComponent },
    { path: 'movies', component: MoviesDashComponent },
    { path: 'series', component: SeriesDashComponent },
    { path: 'favorites', component: FavoritesDashComponent }
  ] }
];

@NgModule({
  declarations: [
    UserClientComponent,
    HomeDashComponent,
    MoviesDashComponent,
    SeriesDashComponent,
    FavoritesDashComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserClientComponent,
    RouterModule
  ]
})
export class UserClientModule { }
