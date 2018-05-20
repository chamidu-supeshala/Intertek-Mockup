import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UserComponent } from './pages/user/user.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: './pages/pages.module#PagesModule' },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
