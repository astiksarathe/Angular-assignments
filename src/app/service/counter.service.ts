import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  studentCount: number = 1;
  collegeCount: number = 1;
  constructor() {}

  logStudentClick() {
    console.log('student ', this.studentCount);
    this.studentCount++;
  }
  logCollegeClick() {
    console.log('college ', this.collegeCount);
    this.collegeCount++;
  }
}
