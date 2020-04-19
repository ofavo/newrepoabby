import { TestBed } from '@angular/core/testing';

import { PresentationsServicesService } from './presentations-services.service';

describe('PresentationsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationsServicesService = TestBed.get(PresentationsServicesService);
    expect(service).toBeTruthy();
  });
});
