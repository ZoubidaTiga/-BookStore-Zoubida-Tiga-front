import { TestBed } from '@angular/core/testing';

import { BService } from './service.service';

describe('ServiceService', () => {
  let service: BService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
