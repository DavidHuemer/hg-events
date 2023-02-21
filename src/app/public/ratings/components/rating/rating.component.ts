import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../../../../core/models/rating";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: Rating | null = null;
  numbers: number[] = [1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }

}
