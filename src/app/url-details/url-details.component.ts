import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UrlInfoService} from '../url-info.service';
import {IUrlData} from '../models/iurldata';
import {IMessage} from '../models/imessage';
import {Router} from '@angular/router';
import {DialogPosition, MatDialog} from '@angular/material';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.scss']
})
export class UrlDetailsComponent implements OnInit {

  _urlData: IUrlData[];
  _responseMessage: IMessage;

  constructor(public dialog: MatDialog, private _urlInfoService: UrlInfoService, private _router: Router ) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(AlertDialogComponent, {
      autoFocus: true,
      position: {},
      role: 'alertdialog',
      closeOnNavigation: true,
      panelClass: 'alert-dialog-panel'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._router.navigate(['/']);
    });
  }
  ngOnInit() {
    this._urlInfoService.getListofAllUrls().subscribe(data => {
      this._urlData = data;
      console.log(this._urlData);
    });
  }

  onClickShortUrl(urlId){
    console.log(urlId);
    this._urlInfoService.getOriginalUrlAfterVerification(urlId).subscribe(data => {
      this._responseMessage = data;
      if (this._responseMessage.value !== 'expired')  {
        console.log(this._responseMessage);
        window.open(this._responseMessage.value, '_blank');
      } else {
        this.openDialog();
        // setTimeout(() => {
        //   this._router.navigate(['/']);
        // }, 800);
      }
    });
  }


}
