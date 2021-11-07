import { TestBed } from '@angular/core/testing';

import { CategororiaService } from './categororia.service';

describe('CategororiaService', () => {
  let service: CategororiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategororiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
