import { TestBed } from '@angular/core/testing';

import { FiltersServicesService } from './filters-services.service';

describe('FiltersServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltersServicesService = TestBed.get(FiltersServicesService);
    expect(service).toBeTruthy();
  });
});
