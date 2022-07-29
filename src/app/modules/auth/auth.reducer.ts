import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

import { Admin, User } from './interfaces';
import { AccountTypes } from './enums';


export const authFeatureKey = 'auth';

export interface State {
  info: Admin | User,
  type: AccountTypes
}

export const initialState: State = {
  info: {} as (Admin | User),
  type: AccountTypes.NONE,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.userLoginSuccess, (state, { user }) => ({ info: user, type: AccountTypes.USER })),
  on(AuthActions.adminLoginSuccess, (state, { admin }) => ({ info: admin, type: AccountTypes.ADMIN })),
  on(AuthActions.logoutSuccess, (state) => initialState)
);
