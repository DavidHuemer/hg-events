import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.scss']
})
export class RatingSystemComponent implements OnInit {

  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

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

    this.ratingChanged?.emit(number);
  }

  ratingExited() {
    this.currentMaxNumber = this.maxNumber;
  }

}
