import { Injectable } from '@angular/core';
import { ResourceService } from '../ResourceService/resource.service';
import { Resource } from 'src/app/models/resource';
import { Observable } from 'rxjs';

@Injectable()
export class ResourceServiceSQLService extends ResourceService {

  getResource(id: number): Observable<Resource> {
    throw new Error("Method not implemented.");
  }
  
  getResources(): Observable<Resource[]> {
    throw new Error("Method not implemented.");
  }
}
