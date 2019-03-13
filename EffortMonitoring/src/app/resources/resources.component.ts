import { Component, OnInit } from '@angular/core';

import { Resource } from '../Models/resource';
import { ResourceService } from '../services/ResourceService/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];
  
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources()
      .subscribe(resources => this.resources = resources);
  }

}
