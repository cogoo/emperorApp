import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmperorService } from '../common-service/emperor.service';
import { Emperor } from '../shared/emperor';

@Component({
  moduleId: module.id,
  selector: 'app-emperor-detail',
  templateUrl: 'emperor-detail.component.html',
  styleUrls: ['emperor-detail.component.css']
})
export class EmperorDetailComponent implements OnInit, OnDestroy {

	emperor: Emperor;
	sub: any;

  constructor(
  	private emperorService: EmperorService,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  		let id = +params['id'];
  		this.emperorService
  		.getEmperor(id)
  		.then(emperor => this.emperor = emperor);
  	})
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

  goBack() {
  	window.history.back();
  }

}
