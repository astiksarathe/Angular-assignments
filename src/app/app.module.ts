import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
