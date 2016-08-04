import { Component, OnInit } from '@angular/core';

import { Emperor } from '../shared/emperor';
import { EmperorDetailComponent } from '../emperor-detail/emperor-detail.component';
import { EmperorService } from '../common-service/emperor.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [EmperorDetailComponent],
  providers: []
})
export class MainComponent implements OnInit {

  constructor(private emperorService: EmperorService) { }

  ngOnInit() {
  	this.getEmperors();
  }

  onselect(emperor: Emperor) {
		this.selectedEmperor = emperor;
	};

	getEmperors() {
		this.emperorService
							.getEmperors()
							.then(emperors => this.emperors = emperors);
	};

  emperors: Emperor[];
  selectedEmperor: Emperor;

}
