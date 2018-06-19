import { TestBed, inject } from '@angular/core/testing';

import { GaurdrouterService } from './gaurdrouter.service';

describe('GaurdrouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdrouterService]
    });
  });

  it('should be created', inject([GaurdrouterService], (service: GaurdrouterService) => {
    expect(service).toBeTruthy();
  }));
});
