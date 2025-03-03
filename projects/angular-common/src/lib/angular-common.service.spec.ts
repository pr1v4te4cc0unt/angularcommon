import { TestBed } from '@angular/core/testing';

import { angularcommonService } from './angular-common.service';

describe('angularcommonService', () => {
  let service: angularcommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(angularcommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
