import { Component, OnInit } from '@angular/core';

@Component({
  selector:  '[app-failure]',//Attribute Selector
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css'],
  styles:[
   ` h1{
      color:red;
    }`
  ]
})
export class FailureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
