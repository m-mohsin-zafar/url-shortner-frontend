import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UrlInfoService} from '../url-info.service';
import {IDataList} from '../models/IDataList';
import * as Chart from 'chart.js';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-url-dashboard-analytics',
  templateUrl: './url-dashboard-analytics.component.html',
  styleUrls: ['./url-dashboard-analytics.component.css']
})
export class UrlDashboardAnalyticsComponent implements OnInit {

  private _urlId;
  _totalClicks;
  _ByYearClicksDataList: IDataList;
  _BrowserClicksDataList: IDataList;
  _PlatformClicksDataList: IDataList;
  myLineChart = [];
  myPieChart = [];
  myBarChart = [];

  constructor(private _activatedRoute: ActivatedRoute, private _urlInfoService: UrlInfoService) {
    this._urlId = _activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this._urlInfoService.getTotalClicksById(this._urlId).subscribe(data => {
      this._totalClicks = data;
      console.log(this._totalClicks);
    });
    this._urlInfoService.getTotalClicksByYearById(this._urlId).subscribe(data => {
      this._ByYearClicksDataList = data;
      console.log(data);
      this.populateLineChart(this._ByYearClicksDataList.clickLabels, this._ByYearClicksDataList.clickValues);
    });
    setTimeout(() => {
      this.fireEventA();
    }, 400);
    setTimeout(() => {
      this.callPlatformDataService();
    }, 800);
  }

  private fireEventA() {
    this._urlInfoService.getBrowserClicks(this._urlId).subscribe(data => {
      this._BrowserClicksDataList = data;
      console.log(data);
      this.populatePiChart(this._BrowserClicksDataList.clickLabels, this._BrowserClicksDataList.clickValues);
    });
  }

  private callPlatformDataService() {
    this._urlInfoService.getPlatformClicks(this._urlId).subscribe(data => {
      this._PlatformClicksDataList = data;
      console.log(data);
      this.populateBarChart(this._PlatformClicksDataList.clickLabels, this._PlatformClicksDataList.clickValues);
    });
  }

  populateLineChart(labelList: any, valueList: any) {
    this.myLineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: labelList,
        datasets: [
          {
            data: valueList,
            borderColor: '#4675ca',
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Years'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: '# of Clicks'
            }
          }]
        }
      }
    });
  }

  populateBarChart(labelList: any, valueList: any) {
    this.myBarChart = new Chart('BarChart', {
      type: 'horizontalBar',
      data: {
        labels: labelList,
        datasets: [
          {
            data: valueList,
            backgroundColor: '#4675ca',
            borderColor: '#4675ca',
            borderWidth: 1
          }
        ]
      },
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 5,
          }
        },
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: '# of Clicks'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Platforms'
            }
          }]
        }
      }
    });
  }

  populatePiChart(labelList: any, valueList: any) {
    this.myPieChart= new Chart('PieChart', {
      type: 'pie',
      data: {
        datasets: [{
          data: valueList,
          backgroundColor: ['RosyBrown', 'RoyalBlue', 'AliceBlue', 'Blue', 'BlueViolet'],
        }],
        labels: labelList
      },
      options: {
        responsive: true
      }
    });
  }
}
