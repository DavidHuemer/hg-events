import {TestBed} from '@angular/core/testing';

import {RequestEquipmentsService} from './request-equipments.service';

describe('RequestEquipmentsService', () => {
  let service: RequestEquipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEquipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
