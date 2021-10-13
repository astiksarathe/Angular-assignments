import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  studentList: Array<string> = [];
  constructor(private studentService: StudentsService, private counterService:CounterService ) {}

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService.schoolStudentList.subscribe((res) => {
      this.studentList = res;
    });
  }

  schoolToCollege(name: string) {
    this.studentService.studentToCollege(name);
    this.counterService.logStudentClick()
  }
}
