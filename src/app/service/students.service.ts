import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  collegeStudentList = new BehaviorSubject(["Abhay", "Lokesh"]);
  schoolStudentList = new BehaviorSubject(["Sujal", "Ashish"]);
  constructor() {}

  // shifting school student in college student list
  studentToCollege(name: string) {
    let college: any = [];
    let student: any = [];

    this.collegeStudentList.subscribe((res) => (college = [...res, name]));
    this.collegeStudentList.next(college);
    this.schoolStudentList.subscribe((res) => (student = res));
    let indexOfName = student.indexOf(name);
    if (indexOfName > -1) {
      student.splice(indexOfName, 1);
    }
    this.schoolStudentList.next(student);
  }

  // shifting college student in school student list
  collegeToStudent(name: string) {
    let college: any = [];
    let school: any = [];
    this.schoolStudentList.subscribe((res) => (school = [...res, name]));
    this.schoolStudentList.next(school);

    this.collegeStudentList.subscribe((res) => (college = res));
    let index = college.indexOf(name);
    if (index > -1) {
      college.splice(index, 1);
    }
    this.collegeStudentList.next(college);
  }
}
