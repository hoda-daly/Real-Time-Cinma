import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { ShearedModule } from '../sheared/sheared.module';
import { MyReservationComponent } from './Components/my-reservation/my-reservation.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { MovesSliderComponent } from './Components/moves-slider/moves-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaymentComponent } from './Components/payment/payment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { ScreenComponent } from './Components/screen/screen.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    MyReservationComponent,
    MovieDetailComponent,
    MovesSliderComponent,
    PaymentComponent,
    TicketComponent,
    ScreenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    MatButtonModule,
    CarouselModule.forRoot(),
    ShearedModule,
  ]
})
export class CustomerModule { }
