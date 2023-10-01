import { DataSeader } from './../../../Service/data-seader.service';
import { UpdateMovieComponent } from './../update-movie/update-movie.component';
import { Subject, Subscription } from 'rxjs';
import { movie } from 'src/app/Model/movie';
import { MovieService } from './../../../Service/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialog } from 'src/app/sheared/Components/delete-confirm-dialog/delete-confirm-dialog.component';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit, OnDestroy {

  movies: movie[] = [];
  private moviesSub?:Subscription;
  constructor(private movieService:MovieService,public dialog: MatDialog,private dataseader:DataSeader) { }

  ngOnInit(): void {
    this.moviesSub = this.movieService.getAllMovies()
                                .subscribe(data=>this.movies=data);
  }

  ngOnDestroy(): void {
    this.moviesSub?.unsubscribe();
  }

  OnEdit(movietoEdit:movie){
    const dialogRef = this.dialog.open(UpdateMovieComponent,{data:movietoEdit});

    dialogRef.afterClosed().subscribe(result => {
      this.movieService.updateMovie(movietoEdit.id, result);

    });
  }

  onDataSead(){
    this.dataseader.seadData();
  }

  OnDeleteEntierDatabase(){
    const dialogRef = this.dialog.open(DeleteConfirmDialog,{data:{name:"the entire database",emphasize:true}});

    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
        this.movieService.dropAll();
    });
  }
}
