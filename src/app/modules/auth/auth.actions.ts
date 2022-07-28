import { createAction, props } from '@ngrx/store';

import { User, Admin } from './interfaces';

export const userLogin = createAction(
  '[User Login] Login',
  props<User>()
);

export const adminLogin = createAction(
  '[Admin Login] Login',
  props<Admin>()
)

export const logout = createAction('[Every Logout] Logout');
