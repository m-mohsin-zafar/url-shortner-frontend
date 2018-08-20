import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDashboardAnalyticsComponent } from './url-dashboard-analytics.component';

describe('UrlDashboardAnalyticsComponent', () => {
  let component: UrlDashboardAnalyticsComponent;
  let fixture: ComponentFixture<UrlDashboardAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDashboardAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDashboardAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
