import { Injectable } from '@angular/core';

import { EMPERORS } from '../shared/mock-emperors';

@Injectable()
export class EmperorService {

  constructor() { }

  getEmperors() {
  	return Promise.resolve(EMPERORS);
  }

  getEmperor(id: number) {
  	return this.getEmperors()
  				.then(emperors => emperors.find(emperor => emperor.id === id));
  }

}
