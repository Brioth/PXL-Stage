import {Resource} from '../../models/resource';
import { Observable } from 'rxjs';
import { OpdrachtType, Opdracht } from 'src/app/models/opdracht';

export abstract class ResourceService {

  abstract getResource(id: number): Observable<Resource>;
  abstract getResources(): Observable<Resource[]>;

  public getTotalEffortForResource(resource: Resource, opdrachtType?: OpdrachtType): number{    
    if(resource.opdrachten !== undefined && resource.opdrachten !== null){
      if(opdrachtType !== undefined){
        return resource.opdrachten.filter((o) => o.type === opdrachtType).reduce((sum, o) => o.effort + sum, 0);
      } else {
        return resource.opdrachten.reduce((sum, o) => o.effort + sum, 0);
      }
    }
    
    return 0;
  }

  public getTotalEffortForTeam(resources: Resource[], opdrachtType?: OpdrachtType): number{
    if(opdrachtType !== undefined){
      return resources.reduce((sum, r)=> sum + this.getTotalEffortForResource(r, opdrachtType),0);
    } else {
      return resources.reduce((sum, r)=> sum + this.getTotalEffortForResource(r),0);
    }
  }

  public getMaxEffortForTeam(resources: Resource[]): number{
    return resources.reduce((sum, r) => sum + r.maxEffort, 0);
  }
}