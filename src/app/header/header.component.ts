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
  }

  playPauseButtonClick()
  {
    this.playing = !this.playing;
    if(this.playing) {
      var workSession: WorkSession;
        workSession.id = 
    }
    
  };

  endWorkSessionClick()
  {
    this.playing = !this.playing;
  };

// ****************************************
// Functions - Status - Click
// ****************************************
  statusHighClick()
  {
    this.status = 3;
  }
  statusMidClick()
  {
    this.status = 2;
  } 
  statusLowClick()
  {
    this.status = 1.
  }
// ****************************************


// ****************************************
// Functions - Location - Click
// ****************************************

locationOfficeClick()
{
  this.location = "Office"
}
locationHomeClick()
{
  this.location = "Home"
}

// ****************************************





}
