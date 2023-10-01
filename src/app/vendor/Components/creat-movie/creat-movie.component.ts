import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';

@Component({
  selector: 'app-creat-movie',
  templateUrl: './creat-movie.component.html',
  styleUrls: ['./creat-movie.component.css']
})
export class CreatMovieComponent implements OnInit {

  newMovie:movie= {
    id:'',
    title:'',
    description:'',
    imgUrl:'',
    backdrop:'',
    director:'',
    cast:[],
    runtime:0,
  };
  constructor(private movieservice:MovieService,private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm){
    if(form.invalid){
      form.form.markAllAsTouched();
      return;
    }
    this.movieservice.addMovie(this.newMovie)
      .pipe(take(1))
      .subscribe(createdMovie=>{
          alert(`movie '${createdMovie.title}' successfully creatged`);
          this.newMovie =  {
            id:'',
            title:'',
            description:'',
            imgUrl:'',
            backdrop:'',
            director:'',
            cast:[],
            runtime:0,
          };
          this.router.navigate(['vendor']);
    });
  }

  removeActor(actor: string) {
    const index = this.newMovie.cast.indexOf(actor);
    if (index >= 0) {
      this.newMovie.cast.splice(index, 1);
    }
  }

  addActor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.newMovie.cast.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
