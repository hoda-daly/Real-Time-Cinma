import { take, Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { movie } from 'src/app/Model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id?:string;
  idSub?:Subscription;
  otherMovies:movie[]=[];
  movie?:movie;

  constructor(private route:ActivatedRoute,private movieservice:MovieService) { }


  ngOnInit(): void {
    this.idSub = this.route.params.subscribe(p=>{
      this.id = p['id'];

      this.movieservice.getMovieById(this.id!).pipe(take(1)).subscribe(m=>{
        this.movie  = m;
      });
      this.movieservice.getAllMovies().pipe(take(1)).subscribe(m=>{
        this.otherMovies = m.filter(mm=>mm.id != this.id);
      })

    });

  }


  ngOnDestroy(): void {
    this.idSub?.unsubscribe();
  }

}
