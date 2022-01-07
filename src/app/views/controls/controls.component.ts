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
  selectedCategory : string = "";

  constructor( public model: ModelService ) {
    this.selectedCategory = this.model.selectedSubDirectory;
   }

  subDirectoryChanged( ev : MatSelectChange)
  {
    console.log(ev);
    this.model.setSubDirectory(ev.value);
  }

  setPaused( paused : boolean) : void
  { 
    console.log(`Set pause to ${paused}`);
    this.model.setPaused(paused);
  }

  ngOnInit(): void {
  }

}
