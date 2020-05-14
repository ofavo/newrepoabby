import { TestBed } from '@angular/core/testing';

import { DirectionsEnvioService } from './directions-envio.service';

describe('DirectionsEnvioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectionsEnvioService = TestBed.get(DirectionsEnvioService);
    expect(service).toBeTruthy();
  });
});
