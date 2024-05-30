import { TestBed } from '@angular/core/testing';

import { ApiBdSupplierService } from './api-bd-supplier.service';

describe('ApiBdSupplierService', () => {
  let service: ApiBdSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBdSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
