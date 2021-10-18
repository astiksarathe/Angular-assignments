import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    await this.authService
      .signIn(form.value.email, form.value.password)
      .then((res) => this.router.navigate(['dashboard']))
      .catch((error) => {
        alert(error.message)
      });
  }
}
