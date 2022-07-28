import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { UserLoginDto } from '../dto';

import { State } from '../../../reducers'
import { userLogin } from '../auth.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private readonly store: Store<State>,
              private readonly auth: AuthService) { }

  ngOnInit(): void {}

  onLogin(credentials: UserLoginDto): void {
    this.auth.userLogin(credentials).subscribe(
      (user: any) => {
        this.store.dispatch(userLogin(user));
        this.auth.redirectToUserClient();
      }
    );
  }

}
