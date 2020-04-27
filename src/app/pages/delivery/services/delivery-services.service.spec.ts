import { TestBed } from '@angular/core/testing';

import { DeliveryServicesService } from './delivery-services.service';

describe('DeliveryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryServicesService = TestBed.get(DeliveryServicesService);
    expect(service).toBeTruthy();
  });
});
