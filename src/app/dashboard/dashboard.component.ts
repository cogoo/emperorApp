import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
  	private emperorService: EmperorService,
  	private router: Router
  	) { }

  ngOnInit() {
  	this.emperorService
  		.getEmperors()
  		.then(emperors => this.emperors = emperors.slice(1,5));
  }

  gotoDetail(emperor: Emperor) {
  	let link = ['/detail', emperor.id];
  	this.router.navigate(link);
  }

  title = 'Top Heroes';

}
