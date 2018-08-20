import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlMainComponent } from './url-main.component';

describe('UrlMainComponent', () => {
  let component: UrlMainComponent;
  let fixture: ComponentFixture<UrlMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
