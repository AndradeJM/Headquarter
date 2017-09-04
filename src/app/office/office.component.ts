import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User } from './../interfaces/user.interface'

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnChanges {

  @Input() users: User[] = [];

  // Users working at the Office  
  workingAtOffice: Array<User> = [];
  workingAtOfficeCounter: number = 0;

  // Users with "Very Busy" status  
  veryBusyUsers: Array<User> = [];
  veryBusyUsersCounter: number = 0;

  // Users with "Busy" status  
  busyUsers: Array<User> = [];
  busyUsersCounter: number = 0;

  // Users with "Free" status    
  freeUsers: Array<User> = [];
  freeUsersCounter: number = 0;
  //---------------------------------------------------------- 

  // This is the code to mantain the data displayed updated.
  ngOnChanges(changes: SimpleChanges) {
    // All users
    var users = changes.users.currentValue;

    // Filter users that are working at the Office and count them. 
    for (var userIndex in users[userIndex]) {
      this.workingAtOffice = users.filter((user) => {
        return (user.isWorking && user.location == "Office" && this.workingAtOfficeCounter++)
      })
    };

    // All Office working users
    var officeWorkingUsers = this.workingAtOffice;

    // Reset the data of users on each status
    this.veryBusyUsers = [];
    this.veryBusyUsersCounter = 0;
    this.busyUsers = [];
    this.busyUsersCounter = 0;
    this.freeUsers = [];
    this.freeUsersCounter = 0;
    
    // Filter users at each status.
    for (var user in officeWorkingUsers[user]) {
      if (officeWorkingUsers[user].status == 3) {
        this.veryBusyUsers.push(officeWorkingUsers[user]);
        this.veryBusyUsersCounter++;
      }
      if (officeWorkingUsers[user].status == 2) {
        this.busyUsers.push(officeWorkingUsers[user]);
        this.busyUsersCounter++;
      }
      if (officeWorkingUsers[user].status == 1) {
        this.freeUsers.push(officeWorkingUsers[user]);
        this.freeUsersCounter++;
        // Need to get the "Knowlodge Available" of each one to display it properly. #ToDo
      }
    }
    //---------------------------------------

  }

  constructor() { }

}
