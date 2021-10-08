import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  shouldVisible: boolean = false
  noOfClick: Array<number> = [];
  constructor() {}
  
  ngOnInit(): void {}

  onBtnClick() {
    this.shouldVisible = !this.shouldVisible;
    this.noOfClick.push(0)
  };
}
