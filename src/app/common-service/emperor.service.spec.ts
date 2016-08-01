/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EmperorService } from './emperor.service';

describe('Service: Emperor', () => {
  beforeEach(() => {
    addProviders([EmperorService]);
  });

  it('should ...',
    inject([EmperorService],
      (service: EmperorService) => {
        expect(service).toBeTruthy();
      }));
});
