import { TestBed } from '@angular/core/testing';

import { DestinationsUserService } from './destinations-user.service';

describe('DestinationsUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinationsUserService = TestBed.get(DestinationsUserService);
    expect(service).toBeTruthy();
  });
});
