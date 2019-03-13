import { Component, OnInit } from '@angular/core';
import { Resource} from '../models/resource';
import { Router } from '@angular/router';
import { ResourceService } from '../services/ResourceService/resource.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  resources: Resource[] = [];
  myChart: any;

  constructor(private resourceService: ResourceService, private router: Router){  }

  ngOnInit(): void {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources()
      .subscribe(
        resources => this.resources = resources   
  )}


  

  
}
