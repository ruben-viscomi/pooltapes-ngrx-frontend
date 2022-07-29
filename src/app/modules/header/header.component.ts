import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../reducers';
import { logout } from '../../modules/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly store: Store<State>) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

}
