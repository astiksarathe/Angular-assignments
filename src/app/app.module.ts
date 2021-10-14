import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserOneComponent } from './user/user-one/user-one.component';
import { UserTwoComponent } from './user/user-two/user-two.component';
import { UserThreeComponent } from './user/user-three/user-three.component';
import { CustomerOneComponent } from './customer/customer-one/customer-one.component';
import { CustomerTwoComponent } from './customer/customer-two/customer-two.component';
import { CustomerThreeComponent } from './customer/customer-three/customer-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    CustomerComponent,
    PageNotFoundComponent,
    UserOneComponent,
    UserTwoComponent,
    UserThreeComponent,
    CustomerOneComponent,
    CustomerTwoComponent,
    CustomerThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
