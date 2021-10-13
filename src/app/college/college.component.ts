import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
})
export class CollegeComponent implements OnInit {
  studentList: Array<string> = [];
  constructor(
    private studentService: StudentsService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService.collegeStudentList.subscribe((res) => {
      this.studentList = res;
    });
  }

  collegeToSchool(name: string) {
    this.studentService.collegeToStudent(name);
    this.counterService.logCollegeClick()
  }
}
