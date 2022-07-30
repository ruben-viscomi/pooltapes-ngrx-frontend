import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  adminLoginForm: FormGroup = new FormGroup({
    internNum: new FormControl(undefined, [
      Validators.required
    ]),
    password: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(256),
      Validators.pattern(/((?=.*\d)|(?=.*\W+))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    ])
  });

  constructor(private readonly store: Store<State>) { }

  ngOnInit(): void {}

  onLogin(): void {
    const credentials: AdminLoginDto = this.adminLoginForm.value;
    this.store.dispatch(adminLogin({ credentials }));
  }

}
