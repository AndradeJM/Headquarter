import { Component, OnInit, Input } from '@angular/core';
import { WorkSessionService } from '../services/work-session.service';
import { WorkSession } from '../work-session.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: object;

  // playing: boolean;
  status: number;
  location: string;
  isFirst: boolean;
  workSession: WorkSession;

  constructor(
    private workSessionService: WorkSessionService
  ) { }

  ngOnInit() {
    // this.playing = false;
    // this.status = null;
    this.isFirst = true;
  }

  newWorkSessionClick() {
    // this.status = null;
    this.workSession = this.workSessionService.newWorkSession();
    this.isFirst = false;
  }

  playPauseButtonClick(workSession) {
    this.workSessionService.playPauseWorksession(workSession);    
    this.workSession.location = this.location;
    console.log(workSession);
  }



  endWorkSessionClick() {
    // WorkSessionService.endWorkSession(workSession);
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

  locationOfficeClick(workSesion) {
    workSesion.location = "Office"
  }
  locationHomeClick(workSesion) {
    workSesion.location = "Home"
  }

  // ****************************************





}
