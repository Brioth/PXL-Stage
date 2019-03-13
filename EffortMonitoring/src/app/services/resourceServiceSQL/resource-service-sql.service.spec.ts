import { TestBed, inject } from '@angular/core/testing';

import { ResourceServiceSQLService } from './resource-service-sql.service';

describe('ResourceServiceSQLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceServiceSQLService]
    });
  });

  it('should be created', inject([ResourceServiceSQLService], (service: ResourceServiceSQLService) => {
    expect(service).toBeTruthy();
  }));
});
