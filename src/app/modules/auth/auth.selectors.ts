import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from '../../reducers';
import { AccountTypes } from './enums';


// export const selectAuth = createFeatureSelector<State>('auth');
export const selectAuth = (state: any) => state.auth;

export const selectInfo = createSelector(
  selectAuth,
  // createFeatureSelector('info')
  (auth) => auth.info
);

export const selectType = createSelector(
  selectAuth,
  // createFeatureSelector('type')
  (auth) => auth.type
);

export const isLoggedUser = createSelector(
  selectType,
  (type: AccountTypes) => type === AccountTypes.USER
);

export const isLoggedAdmin = createSelector(
  selectType,
  (type: AccountTypes) => type === AccountTypes.ADMIN
);
