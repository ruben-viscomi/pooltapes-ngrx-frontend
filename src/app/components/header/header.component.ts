import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { State } from '../../reducers';
import { logout } from '../../modules/auth/auth.actions';

import { AuthService } from '../../modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly auth: AuthService,
              private readonly store: Store<State>,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.auth.logout().subscribe(
      () => {
        this.store.dispatch(logout());
        this.router.navigateByUrl('/');
      }
    );
  }

}
