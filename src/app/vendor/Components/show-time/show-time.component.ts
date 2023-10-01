import { movie } from 'src/app/Model/movie';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { collectionSnapshots } from '@angular/fire/firestore';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit ,OnDestroy{

  id?: string;
  idSub?: Subscription;
  movieSub?: Subscription;
  showSub?: Subscription;
  selecReserv: string[]=[];

  Times:{time:string,reservation?:string[]}[] = [{time:"6PM"},{time:"3PM"},{time:"1PM"},{time:"10AM"}];
  movie?: movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    public dialog: MatDialog,
    private service:ServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieSub = this.movieService.getMovieById(this.id!).subscribe((m) => {
      this.movie = m;
    });

    this.Times.forEach(time => {
      collectionSnapshots(this.service.getAll(this.id!,time.time)).pipe(
        map((seats) => {
          return seats.map((s) => {
            return ({ id:s.id,...s.data()})
          })
        })
      ).subscribe(data => {
        time.reservation = data.map(a=>a.id);
      });
    });


  }


  ngOnDestroy(): void {
    this.idSub?.unsubscribe();
    this.movieSub?.unsubscribe();
    this.showSub?.unsubscribe();
  }



  showSeats() {

  }

  GetReservedCount(seats?: string[]) {
    let count: number = 0;
    seats?.forEach((s) => {
      if (s != '') count++;
    });
    return count;
  }

  getDashedDate(date: string): string {
    const d = new Date(date);
    const formated =
    (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
    return formated;
  }

}
