import { Component, OnInit } from '@angular/core';
import { Resource } from '../Models/resource';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../services/ResourceService/resource.service';
import { Location} from '@angular/common'

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resource: Resource;

  constructor(private route: ActivatedRoute, private resourceService: ResourceService, private location: Location) { }

  ngOnInit() {
    this.getResource();
  }

  getResource(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.resourceService.getResource(id)
      .subscribe(resource => this.resource = resource);
  }

  goBack(): void {
    this.location.back();
  }

}
