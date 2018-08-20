import { TestBed, inject } from '@angular/core/testing';

import { UrlInfoService } from './url-info.service';

describe('UrlInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlInfoService]
    });
  });

  it('should be created', inject([UrlInfoService], (service: UrlInfoService) => {
    expect(service).toBeTruthy();
  }));
});
