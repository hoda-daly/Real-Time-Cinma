import { customer } from './Model/customer';
import { HomeComponent } from './customer/Components/home/home.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MovieDetialsComponent } from './Components/movie-detials/movie-detials.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';

const routes: Routes = [
  {path:'',loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  {path:'vendor' ,loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)},

  // authentication components
  { path: 'sign-in', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
