import { ShowTimeComponent } from './Components/show-time/show-time.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ VendorComponent } from './Components/vendor/vendor.component';
import { CreatMovieComponent } from './Components/creat-movie/creat-movie.component';

const routes: Routes = [
  {path:'',component:VendorComponent},
  {path:'new-movie',component:CreatMovieComponent},
  {path:'movie/:id/showtimes',component:ShowTimeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
