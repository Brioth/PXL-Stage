import { TestBed, inject } from '@angular/core/testing';

import { ResourceServiceNOSQLService } from './resource-service-nosql.service';

describe('ResourceServiceNOSQLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceServiceNOSQLService]
    });
  });

  it('should be created', inject([ResourceServiceNOSQLService], (service: ResourceServiceNOSQLService) => {
    expect(service).toBeTruthy();
  }));
});
