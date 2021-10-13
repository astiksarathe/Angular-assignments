import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  collegeStudentList = new BehaviorSubject(['Abhay', 'Lokesh']);
  schoolStudentList = new BehaviorSubject(['Sujal', 'Ashish']);
  constructor() {}

  studentToCollege(name: string) {
    let studentArrayForCollege: any = [];
    let studentArrayForSchool: any = [];

    this.collegeStudentList.subscribe(
      (res) => (studentArrayForCollege = [...res, name])
    );
    this.collegeStudentList.next(studentArrayForCollege);
    this.schoolStudentList.subscribe((res) => (studentArrayForSchool = res));
    let indexOfName = studentArrayForSchool.indexOf(name);
    if (indexOfName > -1) {
      studentArrayForSchool.splice(indexOfName, 1);
    }
    this.schoolStudentList.next(studentArrayForSchool);
  }
  collegeToStudent(name: string) {
    let studentArrayForCollege: any = [];
    let studentArrayForSchool: any = [];

    this.schoolStudentList.subscribe(
      (res) => (studentArrayForSchool = [...res, name])
    );
    this.schoolStudentList.next(studentArrayForSchool);
    //
    this.collegeStudentList.subscribe((res) => (studentArrayForCollege = res));
    let indexOfName = studentArrayForCollege.indexOf(name);
    if (indexOfName > -1) {
      studentArrayForCollege.splice(indexOfName, 1);
    }
    this.collegeStudentList.next(studentArrayForCollege);
  }
}
