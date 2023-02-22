import { TestBed } from '@angular/core/testing';

import { MerchantRegisterdService } from './merchant-registerd.service';

describe('MerchantRegisterdService', () => {
  let service: MerchantRegisterdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantRegisterdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
