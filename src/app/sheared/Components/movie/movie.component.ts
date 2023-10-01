import { MovieService } from 'src/app/Service/movie.service';
import { movie } from 'src/app/Model/movie';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteConfirmDialog } from '../delete-confirm-dialog/delete-confirm-dialog.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Output() Edit = new EventEmitter<movie>();
  @Input() DisplayForVendor:boolean = false;
  @Input() movie?:movie;

  constructor(public dialog: MatDialog,private movieService:MovieService) { }

  ngOnInit(): void {
  }

  OnDelete(){
    const dialogRef = this.dialog.open(DeleteConfirmDialog,{data:{name:this.movie?.title}});

    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
        this.movieService.deleteMovie(this.movie!.id);
    });
  }

  OnEdit(){
    this.Edit.emit(this.movie);
  }
}
