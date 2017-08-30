import { Injectable } from '@angular/core';
import { WorkSession } from '../interfaces/work-session.interface';

@Injectable()
export class WorkSessionService {

  constructor() { }

  newWorkSession() {
    var workSession = <WorkSession>{};
    workSession.startTime = [];
    workSession.endTime = [];
    workSession.location = null;
    // workSession.workedHours = 0;
    return workSession;
  };

  playPauseWorksession(workSession) {
    workSession.playing = !workSession.playing;

    if (workSession.playing) {
      workSession.startTime.push(new Date());
    }
    if (!workSession.playing) {
      workSession.endTime.push(new Date());
    }
    this.calculateWorkedHouser(workSession);
  };

  endWorkSession(workSession) {
    workSession.endTime.push(new Date());
    workSession.playing = false;
  };

  calculateWorkedHouser(workSession) {
    for(var startTime in workSession.startTime) {
      for(var endTime in workSession.endTime) {
        // startTime and endTime are strings? wtf?
        // let start = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate());
      }
    }
  };


}
