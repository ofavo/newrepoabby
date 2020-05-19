import { TestBed } from '@angular/core/testing';

import { FolderServicesService } from './folder-services.service';

describe('FolderServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FolderServicesService = TestBed.get(FolderServicesService);
    expect(service).toBeTruthy();
  });
});
