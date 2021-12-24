import { Component } from '@angular/core';



import {
  faPause,
  faPlay,
  faSlidersH
 } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photoframe-control';
  faPause = faPause;
  faPlay = faPlay;
  faSlidersH = faSlidersH;
}
