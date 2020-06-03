import { TestBed } from '@angular/core/testing';

import { GeolocatizationService } from './geolocatization.service';

describe('GeolocatizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeolocatizationService = TestBed.get(GeolocatizationService);
    expect(service).toBeTruthy();
  });
});
