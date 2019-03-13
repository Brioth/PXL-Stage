import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEffortOverviewComponent } from './team-effort-overview.component';

describe('TeamEffortOverviewComponent', () => {
  let component: TeamEffortOverviewComponent;
  let fixture: ComponentFixture<TeamEffortOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEffortOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEffortOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
