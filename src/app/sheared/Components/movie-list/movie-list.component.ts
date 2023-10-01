
import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';
import { movie } from 'src/app/Model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() Edit = new EventEmitter<movie>();
  @Input() DisplayForVendor:boolean = false;
  @Input() movies!:movie[];

  constructor() { }

  ngOnInit(): void {
  }

  OnEdit(movie:movie){
    this.Edit.emit(movie);
  }
}
