import { TestBed } from '@angular/core/testing';

import { MySrviceService } from './my-srvice.service';

describe('MySrviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySrviceService = TestBed.get(MySrviceService);
    expect(service).toBeTruthy();
  });
});
