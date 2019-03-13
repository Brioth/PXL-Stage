import { TestBed, inject } from '@angular/core/testing';

import { ResourceServiceDUMMYService } from './resource-service-dummy.service';

describe('ResourceServiceDUMMYService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceServiceDUMMYService]
    });
  });

  it('should be created', inject([ResourceServiceDUMMYService], (service: ResourceServiceDUMMYService) => {
    expect(service).toBeTruthy();
  }));
});
