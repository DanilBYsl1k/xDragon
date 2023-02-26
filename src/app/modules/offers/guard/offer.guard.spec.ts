import { TestBed } from '@angular/core/testing';

import { OfferGuard } from './offer.guard';

describe('OfferGuard', () => {
  let guard: OfferGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OfferGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
