import { TestBed } from '@angular/core/testing';

import { DiretivaNgIfService } from './diretiva-ngif.service';

describe('DiretivaNgifService', () => {
  let service: DiretivaNgIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaNgIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
