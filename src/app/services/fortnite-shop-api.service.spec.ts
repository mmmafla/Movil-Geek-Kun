import { TestBed } from '@angular/core/testing';
import { FortniteShopApiService } from './fortnite-shop-api.service';

describe('FortniteShopApiService', () => {
  let service: FortniteShopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortniteShopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
