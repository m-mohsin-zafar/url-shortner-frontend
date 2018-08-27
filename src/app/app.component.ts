import { Component, OnInit} from '@angular/core';
import {CommonChecks} from './common-checks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'URL Shortner';
  inAnalytics: boolean = false;

  constructor(private commonCheck: CommonChecks) {
    this.commonCheck.getAnalyticsViewState().subscribe(
      data => {
        this.inAnalytics = data;
        console.log(this.inAnalytics);
      }
    );
  }

  ngOnInit() {
  }
}
