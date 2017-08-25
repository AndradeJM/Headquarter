import { TestBed, inject } from '@angular/core/testing';

import { WorkSessionService } from './work-session.service';

describe('WorkSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkSessionService]
    });
  });

  it('should be created', inject([WorkSessionService], (service: WorkSessionService) => {
    expect(service).toBeTruthy();
  }));
});
