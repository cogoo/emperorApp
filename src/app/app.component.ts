import { Component, OnInit } from '@angular/core';

import { MainComponent } from './main/main.component';
import { EmperorService } from './common-service/emperor.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MainComponent],
  providers: [EmperorService]
})
export class AppComponent implements OnInit {

	title = 'Tour of Roman Emperors';

	 ngOnInit() {
  }
	
};








