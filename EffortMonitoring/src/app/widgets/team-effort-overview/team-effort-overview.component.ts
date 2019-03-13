import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/models/resource';
import { ResourceService } from 'src/app/services/ResourceService/resource.service';
import { OpdrachtType } from 'src/app/models/opdracht';
import * as Chart from 'Chart.js';

@Component({
  selector: 'app-team-effort-overview',
  templateUrl: './team-effort-overview.component.html',
  styleUrls: ['./team-effort-overview.component.css']
})
export class TeamEffortOverviewComponent implements OnInit {

  @Input()
  resources: Resource[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.drawDoughnut();
  }

  drawDoughnut(): void{
    var doughnutChart = new Chart('teamDoughnut', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            this.resourceService.getTotalEffortForTeam(this.resources, OpdrachtType.vast),
            this.resourceService.getTotalEffortForTeam(this.resources, OpdrachtType.variabel)
            //this.resourceService.getMaxEffortForTeam(this.resources)-vast-variabel
          ],
          backgroundColor: [
            'pink',
            'purple',
            'green'
          ],
          label: 'team effort'
        }]
      }
    })
  }

}
