import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State } from 'src/app/reducers';
import { userSignup } from '../auth.actions';

import { UserSignupDto } from '../dto';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [Validators.required]),
    mail: new FormControl(undefined, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(undefined, [Validators.required]),
    nationality: new FormControl("", [Validators.required]),
    address: new FormControl(undefined, [Validators.required]),
    birthDate: new FormControl(undefined, [Validators.required])
  })

  constructor(private readonly store: Store<State>) { }

  ngOnInit(): void {
  }

  onSignup(): void {
    const userInfo: UserSignupDto = this.signupForm.value;
    userInfo.birthDate = new Date(userInfo.birthDate).valueOf();
    this.store.dispatch(userSignup({ userInfo }))
    this.signupForm.reset();
  }

}
