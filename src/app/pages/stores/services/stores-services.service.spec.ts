import { TestBed } from '@angular/core/testing';

import { StoresServicesService } from './stores-services.service';

describe('StoresServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoresServicesService = TestBed.get(StoresServicesService);
    expect(service).toBeTruthy();
  });
});
