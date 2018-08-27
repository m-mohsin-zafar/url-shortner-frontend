import {Component, OnInit} from '@angular/core';
import {CommonChecks} from '../common-checks';

@Component({
  selector: 'app-url-dashboard',
  templateUrl: './url-dashboard.component.html',
  styleUrls: ['./url-dashboard.component.scss']
})
export class UrlDashboardComponent implements OnInit {

  _inAnalyticView = true;
  constructor(private commonChecks: CommonChecks ) { }

  ngOnInit() {
     setTimeout(() => {
       this.fireEvent();
     }, 100);
  }
  fireEvent(){
    this.commonChecks.AnalyticsViewValue(this._inAnalyticView);
  }
}
