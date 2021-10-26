import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
      status: new FormControl('active'),
      departments: new FormArray([]),
    });
  }
  defaultStatus: any = 'active';
  onAddDepartment() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.userForm.get('departments')).push(control);
  }
  submitForm() {
    console.table(this.userForm.value);
  }
}
