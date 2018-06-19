import { TestBed, inject } from '@angular/core/testing';

import { GaurdBusViewService } from './gaurd-bus-view.service';

describe('GaurdBusViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdBusViewService]
    });
  });

  it('should be created', inject([GaurdBusViewService], (service: GaurdBusViewService) => {
    expect(service).toBeTruthy();
  }));
});
