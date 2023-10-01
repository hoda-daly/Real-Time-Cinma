import { Title } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  form = new FormGroup({
    title:new FormControl(this.movie.title,[Validators.required]),
    description:new FormControl(this.movie.description,[Validators.required]),
    imgUrl:new FormControl(this.movie.imgUrl,[Validators.required]),
  });

  constructor(public dialogRef: MatDialogRef<UpdateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: movie) {  }

  OnSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

  }

  onNoClick(){
    this.dialogRef.close();
  }

}
