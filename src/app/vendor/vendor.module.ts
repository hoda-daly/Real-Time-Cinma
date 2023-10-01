import { ShearedModule } from './../sheared/sheared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';

// angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';


// components
import { VendorComponent } from './Components/vendor/vendor.component';
import { CreatMovieComponent } from './Components/creat-movie/creat-movie.component';
import { UpdateMovieComponent } from './Components/update-movie/update-movie.component';
import { ShowTimeComponent } from './Components/show-time/show-time.component';


@NgModule({
  declarations: [
    VendorComponent,
    CreatMovieComponent,
    UpdateMovieComponent,
    ShowTimeComponent,
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // sheard
    ShearedModule,

    // angular material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatMenuModule,
    MatBadgeModule
  ],
})
export class VendorModule { }
