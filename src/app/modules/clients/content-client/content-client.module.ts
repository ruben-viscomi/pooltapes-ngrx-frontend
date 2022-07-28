import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from '../../header/header.module';

import { ContentClientComponent } from './content-client.component';

const routes: Routes = [
  { path: '', component: ContentClientComponent }
];

@NgModule({
  declarations: [
    ContentClientComponent
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
export class ContentClientModule { }
