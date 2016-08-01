import { Component, OnInit, Input } from '@angular/core';
import { Emperor } from '../shared/emperor';

@Component({
  moduleId: module.id,
  selector: 'app-emperor-detail',
  templateUrl: 'emperor-detail.component.html',
  styleUrls: ['emperor-detail.component.css']
})
export class EmperorDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  emperor: Emperor;

}
