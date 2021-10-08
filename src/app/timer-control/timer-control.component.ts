import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss'],
})
export class TimerControlComponent implements OnInit {
  interval: any;
  @Output() newCountEvent = new EventEmitter<Array<number>>();
  count: number = 0;
  arrayOfNumber:Array<number>=[]
  constructor() {}

  ngOnInit(): void {}
  startTimer(): void {
     this.interval =  setInterval(()=>this.emitCount(),1000)
  }

  pauseTimer(): void {
    clearInterval(this.interval)
  }

  emitCount() {
    this.count += 1;
    this.arrayOfNumber.push(this.count);
    this.newCountEvent.emit([...this.arrayOfNumber]);
  }
}
