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
    this.user.isWorking = false;
  }

  newWorkSessionClick() {
    this.workSession = this.workSessionService.newWorkSession();
    this.user.isWorking = true;
    this.user.workSessions = [];
  }

  playPauseButtonClick(workSession) {
    if (this.location) {
      this.user.location = this.location;
    }
    this.workSessionService.playPauseWorksession(workSession);
  }



  endWorkSessionClick(workSession) {
    this.workSessionService.endWorkSession(workSession);
    this.user.isWorking = false;
    this.user.workSessions.push(this.workSession);
    // TODO: Save the workSession on the database.
  };

 
  onSignOut(workSession) {
    // The signOut is done with a link com the button.
    // Here I just need to push the workSession to the user, saving it on the database.
    this.user.workSessions.push(this.workSession);
    // TODO: Save the workSession on the database.
  } 

  // ****************************************
  // Functions - Status - Click
  // ****************************************
  statusHighClick() {
    this.user.status = 3;
  }
  statusMidClick() {
    this.user.status = 2;
  }
  statusLowClick() {
    this.user.status = 1.
  }
  // ****************************************


  // ****************************************
  // Functions - Location - Click
  // ****************************************

  locationOfficeClick() {
    this.user.location = "Office"
  }
  locationHomeClick() {
    this.user.location = "Home"
  }

  // ****************************************





}
