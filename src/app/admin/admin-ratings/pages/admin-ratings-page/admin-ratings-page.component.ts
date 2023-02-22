import {Component, OnInit} from '@angular/core';
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {RxState} from "@rx-angular/state";
import {Rating} from "../../../../core/models/rating";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private state: RxState<RatingsPageState>, private ratingsService: RatingsService, private router : Router, private route : ActivatedRoute) {
    this.state.connect('ratings', ratingsService.getRatings());
  }

  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
