import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  sliderMovies:movie[]=[];
  movies: movie[] = [];
  private moviesSubscribtion?:Subscription;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.moviesSubscribtion =
    this.movieService.getAllMovies()
        .subscribe(data=>{
           this.movies=data
           this.sliderMovies= data.filter(m=>m.backdrop);
      });;
  }

  ngOnDestroy(): void {
    this.moviesSubscribtion?.unsubscribe();
  }

}
