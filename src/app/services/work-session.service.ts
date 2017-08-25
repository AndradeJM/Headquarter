import { Injectable } from '@angular/core';
import { WorkSession } from '../work-session.interface';

@Injectable()
export class WorkSessionService {

  constructor() { }

  newWorkSession() {
    var workSession = <WorkSession>{};
    workSession.startTime = [];
    workSession.endTime = [];
    // workSession.playing = false;
    workSession.location = null;
    return workSession;
  }

  playPauseWorksession(workSession) {
    workSession.playing = !workSession.playing;

    if (workSession.playing) {
      workSession.startTime.push(new Date());
    }
    if (!workSession.playing) {
      workSession.endTime.push(new Date());
    }

  }



}
