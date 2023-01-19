import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserRole } from 'src/app/enums/user-role.enum';
import { RoleGuard } from './guards/role.guard';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/dashboard/product-item/product-item.component';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
  {
    path: 'dashboard/products/:productId',
    component: ProductItemComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: [UserRole.Regular],
    },
  },
  {
    path: 'orders',
    component: OrderComponent,
  },

  {
    path: 'dashboard',
    canActivate: [AuthGuard, RoleGuard],
    component: DashboardComponent,
    data: {
      roles: [UserRole.Regular],
    },
  },

  {
    path: 'auth/login',
    component: LoginComponent,
  },

  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
