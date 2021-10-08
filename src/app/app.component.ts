import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment-four';
  counter:any=null;
  count(count: Array<number>) {
    this.counter = count
  };
}
