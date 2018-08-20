import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlInfoService } from '../url-info.service';
import {IUrlData} from '../models/iurldata';

@Component({
  selector: 'app-url-dashboard-header',
  templateUrl: './url-dashboard-header.component.html',
  styleUrls: ['./url-dashboard-header.component.css']
})
export class UrlDashboardHeaderComponent implements OnInit {

  private _urlId;
  urlDetail: IUrlData;

  constructor(private _activatedRoute: ActivatedRoute, private _urlInfoService: UrlInfoService) {
    this._urlId = _activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this._urlInfoService.getDetailofUrlById(this._urlId).subscribe(data => {
      this.urlDetail = data;
      console.log(this.urlDetail);
    });
  }

}
