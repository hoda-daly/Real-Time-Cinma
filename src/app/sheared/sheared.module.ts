import { DayPipe } from './pips/day.pipe';
import { TimePipe } from './pips/time.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material
import{MatButtonModule }from'@angular/material/button'
import{MatIconModule }from'@angular/material/icon'
import{MatTooltipModule }from'@angular/material/tooltip'
import{MatDialogModule }from'@angular/material/dialog';
import{MatFormFieldModule }from'@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// component
import {  MovieComponent } from './Components/movie/movie.component';
import {  DeleteConfirmDialog } from './Components/delete-confirm-dialog/delete-confirm-dialog.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SeatIdToSeatNamePipe } from './pips/seat-id-to-seat-name.pipe';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    DeleteConfirmDialog,
    TimePipe,
    DayPipe,
    
    SeatIdToSeatNamePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MovieComponent,
    MovieListComponent,
    DeleteConfirmDialog,
    
    TimePipe,
    DayPipe,
    SeatIdToSeatNamePipe,
  ]
})
export class ShearedModule { }
