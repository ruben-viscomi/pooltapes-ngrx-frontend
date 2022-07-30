import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserLoginDto } from '../dto';

import { State } from '../../../reducers'
import { userLogin } from '../auth.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm: FormGroup = new FormGroup({
    mail: new FormControl(undefined, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(256),
      Validators.pattern(/((?=.*\d)|(?=.*\W+))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    ])
  });

  constructor(private readonly store: Store<State>) {}

  ngOnInit(): void {}

  onLogin(): void {
    const credentials: UserLoginDto = this.userLoginForm.value;
    this.store.dispatch(userLogin({ credentials }));
  }

}
