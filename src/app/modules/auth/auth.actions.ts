import { createAction, props } from '@ngrx/store';

import { User, Admin } from './interfaces';
import { UserLoginDto, AdminLoginDto } from './dto';

export const userLogin = createAction(
  '[User Login] Login',
  props<{ credentials: UserLoginDto }>()
);

export const userLoginSuccess = createAction(
  '[User Login] Login Success',
  props<{ user: User }>()
);

export const userLoginFail = createAction(
  '[User Login] Login Fail',
  props<{ error: string }>()
);

export const adminLogin = createAction(
  '[Admin Login] Login',
  props<{ credentials: AdminLoginDto }>()
)

export const adminLoginSuccess = createAction(
  '[Admin Login] Login Success',
  props<{ admin: Admin }>()
)

export const adminLoginFail = createAction(
  '[Admin Login] Login Fail',
  props<{ error: string }>()
)

export const logout = createAction(
  '[Auth Logout] Logout'
);

export const logoutSuccess = createAction(
  '[Auth Logout] Logout Success'
);

export const logoutFail = createAction(
  '[Auth Logout] Logout Fail'
)
