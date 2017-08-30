import { Component, OnInit, Input } from '@angular/core';
import { WorkSessionService } from '../services/work-session.service';
import { WorkSession } from '../interfaces/work-session.interface';
import { User } from '../interfaces/user.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  status: number;
  location: string;
  isWorking: boolean;
  workSession: WorkSession;

  constructor(
    private workSessionService: WorkSessionService
  ) { }

  ngOnInit() {
    this.isWorking = false;
  }

  newWorkSessionClick() {
    this.workSession = this.workSessionService.newWorkSession();
    this.isWorking = true;
    // this.user.
  }

  playPauseButtonClick(workSession) {
    if(this.location) {
      this.workSession.location = this.location;
    }
    this.workSessionService.playPauseWorksession(workSession);    
  }



  endWorkSessionClick(workSession) {
    this.workSessionService.endWorkSession(workSession);
    this.isWorking = false;
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
    this.workSession.location = "Office"
  }
  locationHomeClick(workSesion) {
    this.workSession.location = "Home"
  }

  // ****************************************





}
