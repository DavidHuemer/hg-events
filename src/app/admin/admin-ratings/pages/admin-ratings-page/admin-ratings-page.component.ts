import {Component, OnInit} from '@angular/core';
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {RxState} from "@rx-angular/state";
import {Rating} from "../../../../core/models/rating";

interface RatingsPageState {
  ratings: Rating[];
}

@Component({
  selector: 'app-admin-ratings-page',
  templateUrl: './admin-ratings-page.component.html',
  styleUrls: ['./admin-ratings-page.component.scss'],
  providers: [RxState]
})
export class AdminRatingsPageComponent implements OnInit {

  ratings$ = this.state.select('ratings');
  headers: string[] = ["Autor", "Titel", "Bewertung", "Nachricht", "Aktionen"]

  constructor(private state: RxState<RatingsPageState>, private ratingsService: RatingsService) {
    this.state.connect('ratings', ratingsService.getRatings());
  }

  ngOnInit(): void {
  }

}
