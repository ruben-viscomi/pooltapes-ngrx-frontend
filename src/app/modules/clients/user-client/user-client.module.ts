import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from '../../header/header.module';

import { CategoriesResolver, FavoritesResolver, PinsResolver } from 'src/app/resolvers/metadata';

import { UserClientComponent } from './user-client.component';
import { DashComponent } from './components/dash/dash.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MiniDetailComponent } from './components/mini-detail/mini-detail.component';

const routes: Routes = [
  { path: '', component: UserClientComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashComponent, resolve: { pins: PinsResolver, categories: CategoriesResolver } },
    { path: 'movies', component: DashComponent, resolve: { pins: PinsResolver, categories: CategoriesResolver } },
    { path: 'series', component: DashComponent, resolve: { pins: PinsResolver, categories: CategoriesResolver } },
    { path: 'favorites', component: FavoritesComponent, resolve: { favorites: FavoritesResolver } }
  ] }
];

@NgModule({
  declarations: [
    UserClientComponent,
    DashComponent,
    FavoritesComponent,
    CarouselComponent,
    MiniDetailComponent
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
