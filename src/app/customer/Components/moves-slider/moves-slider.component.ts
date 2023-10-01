import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/Model/movie';

@Component({
  selector: 'app-moves-slider',
  templateUrl: './moves-slider.component.html',
  styleUrls: ['./moves-slider.component.css']
})
export class MovesSliderComponent implements OnInit {

  @Input() movies:movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
