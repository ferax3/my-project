import { TestBed } from '@angular/core/testing';

import { ApiBdPharmacistService } from './api-bd-pharmacist.service';

describe('ApiBdPharmacistService', () => {
  let service: ApiBdPharmacistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBdPharmacistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
