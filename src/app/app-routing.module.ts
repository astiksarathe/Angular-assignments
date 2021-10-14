import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOneComponent } from './customer/customer-one/customer-one.component';
import { CustomerTwoComponent } from './customer/customer-two/customer-two.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserGuard } from './user.guard';
import { UserOneComponent } from './user/user-one/user-one.component';
import { UserThreeComponent } from './user/user-three/user-three.component';
import { UserTwoComponent } from './user/user-two/user-two.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivateChild:[UserGuard],
    children: [
      {
        path: 'user-one',
        component:UserOneComponent
      },
      {
        path: 'user-two',
        component:UserTwoComponent
      },
      {
        path: 'user-three',
        component:UserThreeComponent
      }
    ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: 'customer-one',
        component:CustomerOneComponent
      },
      {
        path: 'customer-two',
        component:CustomerTwoComponent
      },
      {
        path: 'customer-three',
        component:CustomerOneComponent
      },
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
