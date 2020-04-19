import { TestBed } from '@angular/core/testing';

import { LocationsServicesService } from './locations-services.service';

describe('LocationsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsServicesService = TestBed.get(LocationsServicesService);
    expect(service).toBeTruthy();
  });
});
