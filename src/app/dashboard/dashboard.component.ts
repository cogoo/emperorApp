import { Component, OnInit } from '@angular/core';

import { Emperor } from '../shared/emperor';
import { EmperorService } from '../common-service/emperor.service';



@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	emperors: Emperor[] = [];

  constructor(private emperorService: EmperorService) { }

  ngOnInit() {
  	this.emperorService
  		.getEmperors()
  		.then(emperors => this.emperors = emperors.slice(1,5));
  }

  gotoDetail() {
  	
  }

  title = 'Top Heroes';

}
