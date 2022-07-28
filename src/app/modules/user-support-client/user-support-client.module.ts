import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserSupportClientComponent } from './user-support-client.component';

const routes: Routes = [
  { path: '', component: UserSupportClientComponent }
]

@NgModule({
  declarations: [
    UserSupportClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserSupportClientModule { }
