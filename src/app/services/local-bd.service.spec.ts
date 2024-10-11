import { TestBed } from '@angular/core/testing';

import { DblocalService } from './local-bd.service';

describe('LocalBDService', () => {
  let service: DblocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DblocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
