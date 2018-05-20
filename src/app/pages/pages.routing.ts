import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'order/detail',
    component: OrderDetailComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
