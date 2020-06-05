import { TestBed } from '@angular/core/testing';

import { DirectionsServiceService } from './directions-service.service';

describe('DirectionsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectionsServiceService = TestBed.get(DirectionsServiceService);
    expect(service).toBeTruthy();
  });
});
