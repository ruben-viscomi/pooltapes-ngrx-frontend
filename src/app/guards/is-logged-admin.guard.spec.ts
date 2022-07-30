import { TestBed } from '@angular/core/testing';

import { IsLoggedAdminGuard } from './is-logged-admin.guard';

describe('IsLoggedAdminGuard', () => {
  let guard: IsLoggedAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
