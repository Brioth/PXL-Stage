import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ResourceService } from './services/ResourceService/resource.service';
import { ResourceServiceDUMMYService } from './services/resourceServiceDummy/resource-service-dummy.service';
import { TeamEffortOverviewComponent } from './widgets/team-effort-overview/team-effort-overview.component';
import { TeamEffortOverviewExtendedComponent } from './widgets/team-effort-overview-extended/team-effort-overview-extended.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ResourceDetailComponent,
    DashboardComponent,
    TeamEffortOverviewComponent,
    TeamEffortOverviewExtendedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [{provide: ResourceService, useClass: ResourceServiceDUMMYService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
