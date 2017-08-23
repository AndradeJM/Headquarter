import { Component, OnInit, Input } from '@angular/core';
import { WorkSession } from '../work-session.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: object;

  playing: boolean;
  status: number;
  location: string;
  isFirst: boolean;

  constructor() { }

  ngOnInit() {
    this.playing = false;
    this.status = null;
    this.isFirst = true;
  }


  // I'm handling all the logic of creating and starting/ending a session here.
  // It's not working properly. I need to make a service or other controller
  // to handle this logic. #TODO
  playPauseButtonClick() {
    this.playing = !this.playing;
    if (this.playing && !this.isFirst) {
      workSession.startTime.push(new Date());
    }
    if (this.playing && this.isFirst) {
      var workSession = <WorkSession>{};
      // var workSession = new workSession();
      workSession.startTime = [];
      workSession.endTime = [];
      this.isFirst = false;

      workSession.location = this.location;
      workSession.startTime.push(new Date());
    }
    if (!this.playing) {
      workSession.endTime.push(new Date());
    }
    console.log(workSession);

  };

  endWorkSessionClick() {
    this.playing = !this.playing;
  };

  // ****************************************
  // Functions - Status - Click
  // ****************************************
  statusHighClick() {
    this.status = 3;
  }
  statusMidClick() {
    this.status = 2;
  }
  statusLowClick() {
    this.status = 1.
  }
  // ****************************************


  // ****************************************
  // Functions - Location - Click
  // ****************************************

  locationOfficeClick() {
    this.location = "Office"
  }
  locationHomeClick() {
    this.location = "Home"
  }

  // ****************************************





}
