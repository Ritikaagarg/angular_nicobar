import { TestBed } from '@angular/core/testing';

import { JsDataService } from './js-data.service';

describe('JsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsDataService = TestBed.get(JsDataService);
    expect(service).toBeTruthy();
  });
});
