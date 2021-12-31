import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

import {
  faPause,
  faPlay,
  faSlidersH
 } from '@fortawesome/free-solid-svg-icons';

import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  faPause = faPause;
  faPlay = faPlay;
  faSlidersH = faSlidersH;

  constructor( public model: ModelService ) { }

  subDirectoryChanged( ev : MatSelectChange)
  {
    console.log(ev);
    this.model.setSubDirectory(ev.value);
  }

  ngOnInit(): void {
  }

}
