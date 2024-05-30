import { TestBed } from '@angular/core/testing';

import { ApiBdClientService } from './api-bd-client.service';

describe('ApiBdClientService', () => {
  let service: ApiBdClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBdClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
