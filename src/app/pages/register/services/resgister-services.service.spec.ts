import { TestBed } from '@angular/core/testing';

import { ResgisterServicesService } from './resgister-services.service';

describe('ResgisterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResgisterServicesService = TestBed.get(ResgisterServicesService);
    expect(service).toBeTruthy();
  });
});
