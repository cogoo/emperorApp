import { Component, OnInit } from '@angular/core';

import { Emperor } from './shared/emperor';
import { EmperorDetailComponent } from './emperor-detail/emperor-detail.component';
import { EmperorService } from './common-service/emperor.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [EmperorDetailComponent],
  providers: [EmperorService]
})
export class AppComponent implements OnInit {

	title = 'Tour of Roman Emperors';
	emperors: Emperor[];
	selectedEmperor: Emperor;

 	constructor(private emperorService: EmperorService) { };

	ngOnInit() {
		this.getEmperors();
	};

	onselect(emperor: Emperor) {
		this.selectedEmperor = emperor;
	};

	getEmperors() {
		this.emperors = this.emperorService
							.getEmperors();
							// .then(emperors => this.emperors = emperors);
	};
};








