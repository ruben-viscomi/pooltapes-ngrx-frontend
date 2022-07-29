import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../../reducers';
import { adminLogin } from '../auth.actions';

import { AdminLoginDto } from '../dto';
import { Admin } from '../interfaces';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private readonly store: Store<State>) { }

  ngOnInit(): void {}

  onLogin(credentials: AdminLoginDto): void {
    this.store.dispatch(adminLogin({ credentials }));
  }

}
