import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';

import { AuthGuard } from './guards/auth.guard';
import { MyReservationComponent } from './Components/my-reservation/my-reservation.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './Components/screen/screen.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TicketComponent } from './Components/ticket/ticket.component';

const routes: Routes = [
  {path:'',component:HomeComponent, },
  {path:'movie/:id',component:MovieDetailComponent},
  {path:'my-reservation',component:MyReservationComponent,canActivate:[AuthGuard]},

  //
  { path: 'book-movie/:id', component:ScreenComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'ticket', component:TicketComponent},
  { path: 'ticket/:id/:time', component:TicketComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
