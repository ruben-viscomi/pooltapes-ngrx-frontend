import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentClientModule { }
