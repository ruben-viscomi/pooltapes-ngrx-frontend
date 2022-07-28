import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../../reducers';
import { adminLogin } from '../auth.actions';

import { AuthService } from '../auth.service';
import { AdminLoginDto } from '../dto';
import { Admin } from '../interfaces';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private readonly store: Store<State>,
              private readonly auth: AuthService) { }

  ngOnInit(): void {}

  onLogin(credentials: AdminLoginDto): void {
    this.auth.adminLogin(credentials).subscribe(
      (admin: Admin) => {
        this.store.dispatch(adminLogin(admin));
        this.auth.redirectToAdminClient(admin);
      }
    );
  }

}
