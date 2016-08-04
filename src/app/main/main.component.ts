import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(
    private emperorService: EmperorService,
    private router: Router
    ) { }

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

  gotoDetail() {
    this.router.navigate(['/detail',this.selectedEmperor.id])
  }

  emperors: Emperor[];
  selectedEmperor: Emperor;

}
