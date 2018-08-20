import { Component, OnInit } from '@angular/core';
import { UrlInfoService } from '../url-info.service';

@Component({
  selector: 'app-url-generator',
  templateUrl: './url-generator.component.html',
  styleUrls: ['./url-generator.component.css']
})
export class UrlGeneratorComponent implements OnInit {

  private _originalURL;
  _gotResult = false;
  _shortenedUrl;

  constructor(private _urlInfoService: UrlInfoService) { }

  ngOnInit() {
  }

  generateUrl(url_value) {
    this._originalURL = url_value;
    console.log(url_value);
    this._urlInfoService.generateShortUrl(this._originalURL).subscribe(
      (data: any) => {
        console.log(data);
        this._shortenedUrl = data.shortUrl;
        this._gotResult = true;
      },
      (error: any) => console.log(error)
    );
  }

  copyUrlToClipBoard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
