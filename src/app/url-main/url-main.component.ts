import { Component, OnInit } from '@angular/core';
import {CommonChecks} from '../common-checks';

@Component({
  selector: 'app-url-main',
  templateUrl: './url-main.component.html',
  styleUrls: ['./url-main.component.css']
})
export class UrlMainComponent implements OnInit {

  _inAnalyticView = false;
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
