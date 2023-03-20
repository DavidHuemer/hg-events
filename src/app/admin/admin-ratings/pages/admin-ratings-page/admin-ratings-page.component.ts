import {Component, Inject, OnInit} from '@angular/core';
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {RxState} from "@rx-angular/state";
import {Rating} from "../../../../core/models/rating";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseDashboardPage} from "../../../basics/BaseDashboardPage";
import {PUBLIC_GLOBAL_RX_STATE} from "../../../../core/states/PublicGlobalState";
import {AdminGlobalState} from "../../../../core/states/AdminGlobalState";

interface RatingsPageState {
  ratings: Rating[];
}

@Component({
  selector: 'app-admin-ratings-page',
  templateUrl: './admin-ratings-page.component.html',
  styleUrls: ['./admin-ratings-page.component.scss'],
  providers: [RxState]
})
export class AdminRatingsPageComponent extends BaseDashboardPage implements OnInit {

  ratings$ = this.state.select('ratings');
  headers: string[] = ["Autor", "Titel", "Bewertung", "Nachricht", "Aktionen"]

  constructor(@Inject(PUBLIC_GLOBAL_RX_STATE) globalState: RxState<AdminGlobalState>, private state: RxState<RatingsPageState>, private ratingsService: RatingsService, private router: Router, private route: ActivatedRoute) {
    super(globalState);
    this.state.connect('ratings', ratingsService.getRatings());
  }

  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigate([id], {relativeTo: this.route});
  }

  protected getTitle(): string {
    return "Gästebucheinträge";
  }
}
