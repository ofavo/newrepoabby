import { TestBed } from '@angular/core/testing';

import { ProfileServicesService } from './profile-services.service';

describe('ProfileServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileServicesService = TestBed.get(ProfileServicesService);
    expect(service).toBeTruthy();
  });
});
