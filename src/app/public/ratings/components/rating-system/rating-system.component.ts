import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.scss']
})
export class RatingSystemComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5];

  currentMaxNumber: number = 5;
  maxNumber: number = this.currentMaxNumber;

  constructor() {
  }

  ngOnInit(): void {
  }

  starMouseOver(n: number) {
    this.currentMaxNumber = n;
  }

  ratingClicked(number: number) {
    this.currentMaxNumber = number;
    this.maxNumber = number;
  }

  ratingExited() {
    this.currentMaxNumber = this.maxNumber;
  }

}
