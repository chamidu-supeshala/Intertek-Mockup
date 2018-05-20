import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BaseLayoutModule } from '../layout/base-layout/base-layout.module';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer/customer.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderDetailService } from './order/order-detail/order-detail.service';

@NgModule({
  imports: [SharedModule, PagesRoutingModule, BaseLayoutModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PagesComponent,
    ProfileComponent,
    UserComponent,
    CustomerComponent,
    OrderComponent,
    OrderDetailComponent,
  ],
  providers: [
    { provide: 'UserService', useClass: UserService },
    { provide: 'CustomerService', useClass: CustomerService },
    { provide: 'OrderService', useClass: OrderService },
    { provide: 'OrderDetailService', useClass: OrderDetailService },
  ]
})
export class PagesModule {}
