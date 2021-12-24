import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

import {
  faPause,
  faPlay,
  faSlidersH
 } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  faPause = faPause;
  faPlay = faPlay;
  faSlidersH = faSlidersH;

  constructor( private model: ModelService ) { }

  ngOnInit(): void {
  }

}
