import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEffortOverviewExtendedComponent } from './team-effort-overview-extended.component';

describe('TeamEffortOverviewExtendedComponent', () => {
  let component: TeamEffortOverviewExtendedComponent;
  let fixture: ComponentFixture<TeamEffortOverviewExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEffortOverviewExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEffortOverviewExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
