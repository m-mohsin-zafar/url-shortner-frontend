import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UrlInfoService } from '../url-info.service';
import {IUrlData} from '../models/iurldata';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';
import {MatDialog} from '@angular/material';
import {IMessage} from '../models/imessage';

@Component({
  selector: 'app-url-dashboard-header',
  templateUrl: './url-dashboard-header.component.html',
  styleUrls: ['./url-dashboard-header.component.scss']
})
export class UrlDashboardHeaderComponent implements OnInit {

  private _urlId;
  urlDetail: IUrlData;
  _responseMessage: IMessage;

  constructor(public dialog: MatDialog, private _activatedRoute: ActivatedRoute, private _urlInfoService: UrlInfoService, private _router: Router) {
    this._urlId = _activatedRoute.snapshot.params['id'];
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AlertDialogComponent, {
        autoFocus: true,
        position: {},
        role: 'alertdialog',
        closeOnNavigation: true
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.populateAnalyticsHeader();
    }, 200);
  }

  populateAnalyticsHeader(){
    this._urlInfoService.getDetailofUrlById(this._urlId).subscribe(data => {
      this.urlDetail = data;
      console.log(this.urlDetail);
    });
  }

  onClickUrl(urlId){
    console.log(urlId);
    this._urlInfoService.getOriginalUrlAfterVerification(urlId).subscribe(data => {
      this._responseMessage = data;
      if (this._responseMessage.value !== 'expired')  {
        console.log(this._responseMessage);
        window.open(this._responseMessage.value, '_blank');
      } else {
        this.openDialog();
      }
    });
  }
}
