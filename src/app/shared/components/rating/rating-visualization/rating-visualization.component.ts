import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-visualization',
  templateUrl: './rating-visualization.component.html',
  styleUrls: ['./rating-visualization.component.scss']
})
export class RatingVisualizationComponent implements OnInit {

  @Input() rating: number = 5;
  numbers: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
