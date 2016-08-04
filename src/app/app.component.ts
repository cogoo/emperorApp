import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { EmperorService } from './common-service/emperor.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [EmperorService]
})
export class AppComponent implements OnInit {

	title = 'Tour of Roman Emperors';

	 ngOnInit() {
  }
	
};








