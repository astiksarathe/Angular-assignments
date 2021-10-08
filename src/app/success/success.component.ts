import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  template:'<app-failure></app-failure>',//Inline template used for failure compoenent
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  

}
