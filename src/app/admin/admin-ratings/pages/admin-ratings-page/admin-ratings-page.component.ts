import {Component, Inject, OnInit} from '@angular/core';
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {RxState} from "@rx-angular/state";
import {Rating, RatingDto} from "../../../../core/models/rating";
import {PUBLIC_GLOBAL_RX_STATE} from "../../../../core/states/PublicGlobalState";
import {AdminGlobalState} from "../../../../core/states/AdminGlobalState";
import {BaseEditableCollectionDashboardPage} from "../../../basics/BaseEditableCollectionDashboardPage";
import {CollectionLoadingState} from "../../../../core/basics/loader/CollectionLoadingHandler";
import {ActivatedRoute, Router} from "@angular/router";

interface RatingsPageState extends CollectionLoadingState<Rating> {

}

@Component({
  selector: 'app-admin-ratings-page',
  templateUrl: './admin-ratings-page.component.html',
  styleUrls: ['./admin-ratings-page.component.scss'],
  providers: [RxState]
})
export class AdminRatingsPageComponent extends BaseEditableCollectionDashboardPage<Rating, RatingDto> implements OnInit {

  ratings$ = this.loadingHandler.getContent();
  headers: string[] = ["Autor", "Titel", "Bewertung", "Nachricht", "Aktionen"]

  constructor(@Inject(PUBLIC_GLOBAL_RX_STATE) globalState: RxState<AdminGlobalState>, state: RxState<RatingsPageState>,
              firebaseService: RatingsService, router: Router, route: ActivatedRoute) {
    super(globalState, state, firebaseService, router, route);
  }

  ngOnInit(): void {
  }

  protected getTitle(): string {
    return "Gästebucheinträge";
  }

  getNameOfEntity(entity: Rating): string {
    return entity.title;
  }
}
