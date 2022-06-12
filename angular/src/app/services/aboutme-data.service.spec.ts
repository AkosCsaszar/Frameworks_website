import { TestBed } from '@angular/core/testing';

import { AboutmeDataService } from './aboutme-data.service';

describe('AboutmeDataService', () => {
  let service: AboutmeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutmeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
