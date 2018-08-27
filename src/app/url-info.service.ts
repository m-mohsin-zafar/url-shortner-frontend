import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUrlData} from './models/iurldata';
import {IDataList} from './models/IDataList';
import {IMessage} from './models/imessage';

@Injectable({
  providedIn: 'root'
})
export class UrlInfoService {

  private _postUrl = 'http://localhost:8080/qrapi/api/v1/url/shortenurl';
  private _getAllUrl = 'http://localhost:8080/qrapi/api/v1/url/all';
  private _getDetailByIdUrl = 'http://localhost:8080/qrapi/api/v1/url/detail';
  private _getTotalClicksByIdUrl = 'http://localhost:8080/qrapi/api/v1/url/totalclicks';
  private _getTotalClicksByYearByIdUrl = 'http://localhost:8080/qrapi/api/v1/url/byyearclicks';
  private _getBrowserClicksUrl = 'http://localhost:8080/qrapi/api/v1/url/browserclicks';
  private _getPlatformClicksUrl = 'http://localhost:8080/qrapi/api/v1/url/platformclicks';
  private _getOriginalUrlAfterVerificationUrl = 'http://localhost:8080/qrapi/api/v1/url/verifynroute';
  private _originalUrlObject;

  constructor(private http: HttpClient) {
  }

  generateShortUrl(original_url): Observable<any>{
    this._originalUrlObject = '{ "originalUrl" : "' + original_url + '" }';
    return this.http.post(this._postUrl, this._originalUrlObject, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getListofAllUrls(): Observable<IUrlData[]> {
    return this.http.get<IUrlData[]>(this._getAllUrl);
  }

  getDetailofUrlById(id): Observable<IUrlData> {
    return this.http.get<IUrlData>(this._getDetailByIdUrl,
      {params: {
        id: id
        }});
  }
  getTotalClicksById(id): Observable<number> {
    return this.http.get<number>(this._getTotalClicksByIdUrl,
      {params: {
          id: id
        }});
  }
  getTotalClicksByYearById(id): Observable<IDataList> {
    return this.http.get<IDataList>(this._getTotalClicksByYearByIdUrl,
      {params: {
          id: id
        }});
  }
  getBrowserClicks(id): Observable<IDataList> {
    return this.http.get<IDataList>(this._getBrowserClicksUrl,
      {params: {
          id: id
        }});
  }
  getPlatformClicks(id): Observable<IDataList> {
    return this.http.get<IDataList>(this._getPlatformClicksUrl,
      {params: {
          id: id
        }});
  }

  getOriginalUrlAfterVerification(id): Observable<IMessage> {
    return this.http.get<IMessage>(this._getOriginalUrlAfterVerificationUrl,
      {params: {
        id: id
        }});
  }
}
