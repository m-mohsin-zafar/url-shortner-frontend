import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDashboardHeaderComponent } from './url-dashboard-header.component';

describe('UrlDashboardHeaderComponent', () => {
  let component: UrlDashboardHeaderComponent;
  let fixture: ComponentFixture<UrlDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
