import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CommonChecks {

  private _AnalyticsViewValue = new EventEmitter<boolean>();

  getAnalyticsViewState() {
    return this._AnalyticsViewValue;
  }

  AnalyticsViewValue(value: boolean) {
    this._AnalyticsViewValue.emit(value);
  }
}
