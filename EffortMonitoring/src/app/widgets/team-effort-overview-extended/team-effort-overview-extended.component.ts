import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from 'src/app/services/ResourceService/resource.service';
import { Resource } from 'src/app/models/resource';
import { OpdrachtType } from 'src/app/models/opdracht';
import * as Chart from 'Chart.js';

@Component({
  selector: 'app-team-effort-overview-extended',
  templateUrl: './team-effort-overview-extended.component.html',
  styleUrls: ['./team-effort-overview-extended.component.css']
})
export class TeamEffortOverviewExtendedComponent implements OnInit {

  @Input()
  resources: Resource[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.drawBar();
  }

  drawBar(): void{
    var barChart = new Chart('teamBar', {
      type: 'bar',
      data: {
        labels: this.resources.map(r=> r.naam),
        datasets: [{
          label: 'Vast',
          backgroundColor: this.resources.map(r=> this.resourceService.getTotalEffortForResource(r) < r.maxEffort? 'green' : 'red'),
          data: this.resources.map(r=> this.resourceService.getTotalEffortForResource(r, OpdrachtType.vast)),
          datalabels: {
            align: 'center',
            anchor: 'center'
          }
        }, {
          label: 'Variabel',
          backgroundColor: this.resources.map(r=> this.resourceService.getTotalEffortForResource(r) < r.maxEffort? 'orange' : 'yellow'),
          data: this.resources.map(r=> this.resourceService.getTotalEffortForResource(r, OpdrachtType.variabel)),
          datalabels: {
            align: 'center',
            anchor: 'center'
          }
        }]
      },
      options: {
        plugins: {
          datalabels: {
            color: 'white',
            display: function(context) {
              return context.dataset.data[context.dataIndex]>15
            },
            font: {
              weight: 'bold'
            },
            formatter: Math.round
          }
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
      
    });
  }

}
