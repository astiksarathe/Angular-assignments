import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface User {
  email: string;
  password: string;
  status: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('form') userForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}
  user: User = {
    email: '',
    password: '',
    status: '',
  };
  updatePassword() {
    const updatedPassword = 'admin1234';
    this.userForm.form.patchValue({
      password: updatedPassword,
    });
  }
  submitted = false;
  defaultStatus: any = 'active';
  onSubmit() {
    this.submitted = true;
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
    this.user.status = this.userForm.value.status;
    this.userForm.reset();
  }
}
