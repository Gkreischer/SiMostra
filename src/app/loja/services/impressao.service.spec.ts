import { TestBed } from '@angular/core/testing';

import { ImpressaoService } from './impressao.service';

describe('ImpressaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpressaoService = TestBed.get(ImpressaoService);
    expect(service).toBeTruthy();
  });
});
