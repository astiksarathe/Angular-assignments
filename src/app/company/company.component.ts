import { Component, ErrorHandler, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyName: string = '';

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.companyName = 'Company Name Changed';
  }
}
