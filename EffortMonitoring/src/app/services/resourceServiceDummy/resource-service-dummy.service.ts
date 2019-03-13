import { Injectable } from '@angular/core';
import { ResourceService } from '../ResourceService/resource.service';
import { Resource } from 'src/app/models/resource';
import { Observable, of } from 'rxjs';
import { RESOURCES } from '../resourceServiceDummy/mock-resources';

@Injectable()
export class ResourceServiceDUMMYService extends ResourceService {

  constructor(){
    super();
  }

  getResource(id: number): Observable<Resource> {
    return of(RESOURCES.find(r => r.id === id));
  }

  getResources(): Observable<Resource[]> {
    return of(RESOURCES);
  }
}
