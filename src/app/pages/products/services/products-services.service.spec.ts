import { TestBed } from '@angular/core/testing';

import { ProductsServicesService } from './products-services.service';

describe('ProductsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsServicesService = TestBed.get(ProductsServicesService);
    expect(service).toBeTruthy();
  });
});
