import { Component, OnInit } from '@angular/core';
import {UrlInfoService} from '../url-info.service';
import {IUrlData} from '../models/iurldata';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {

  _urlData: IUrlData[];

  constructor(private _urlInfoService: UrlInfoService) { }

  ngOnInit() {
    this._urlInfoService.getListofAllUrls().subscribe(data => {
      this._urlData = data;
      console.log(this._urlData);
    });
  }


}
