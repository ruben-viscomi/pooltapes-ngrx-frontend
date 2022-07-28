import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountingClientComponent } from './accounting-client.component';

const routes: Routes = [
  { path: '', component: AccountingClientComponent }
]

@NgModule({
  declarations: [
    AccountingClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountingClientModule { }
