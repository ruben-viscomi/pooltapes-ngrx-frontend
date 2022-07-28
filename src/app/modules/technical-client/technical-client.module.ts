import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from '../header/header.module';

import { TechnicalClientComponent } from './technical-client.component';

const routes: Routes = [
  { path: '', component: TechnicalClientComponent }
]

@NgModule({
  declarations: [
    TechnicalClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [
    RouterModule
  ]
})
export class TechnicalClientModule { }
