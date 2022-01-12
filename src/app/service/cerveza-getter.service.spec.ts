import { TestBed } from '@angular/core/testing';

import { CervezaGetterService } from './cerveza-getter.service';

describe('CervezaGetterService', () => {
  let service: CervezaGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CervezaGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
