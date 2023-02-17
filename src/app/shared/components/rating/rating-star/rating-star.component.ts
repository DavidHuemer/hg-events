import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit {

  @Input() rated : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
