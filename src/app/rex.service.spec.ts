import { TestBed, inject } from '@angular/core/testing';

import { RexService } from './rex.service';

describe('RexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RexService]
    });
  });

  it('should be created', inject([RexService], (service: RexService) => {
    expect(service).toBeTruthy();
  }));
});
