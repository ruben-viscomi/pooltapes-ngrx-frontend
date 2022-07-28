import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from '../header/header.module';

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
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [
    RouterModule
  ]
})
export class AccountingClientModule { }
