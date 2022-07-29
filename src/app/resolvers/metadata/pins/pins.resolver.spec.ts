import { TestBed } from '@angular/core/testing';

import { PinsResolver } from './pins.resolver';

describe('PinsResolver', () => {
  let resolver: PinsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PinsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
