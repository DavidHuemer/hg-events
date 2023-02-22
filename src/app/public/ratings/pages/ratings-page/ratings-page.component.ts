import {Component, OnInit} from '@angular/core';
import {RatingsService} from "../../../../core/services/ratings/ratings.service";
import {Rating} from "../../../../core/models/rating";
import {RxState} from "@rx-angular/state";
import {combineLatest, map, Observable} from "rxjs";
import {LoadableContainerStatus} from "../../../../shared/components/loadable-list/loadable-list.component";

interface RatingsPageState {
  loaded: boolean;
  ratings: Rating[];
}

@Component({
  selector: 'app-ratings-page',
  templateUrl: './ratings-page.component.html',
  styleUrls: ['./ratings-page.component.scss'],
  providers: [RxState]
})
export class RatingsPageComponent implements OnInit {

  ratings$: Observable<Rating[]> = this.state.select('ratings');

  status$: Observable<LoadableContainerStatus> = combineLatest([this.state.select('loaded'), this.ratings$]).pipe(
    map(([loaded, ratings]) => {
      console.log(loaded);

      if (!loaded) return LoadableContainerStatus.LOADING;

      if (ratings.length == 0) return LoadableContainerStatus.EMPTY;

      return LoadableContainerStatus.SHOWING;
    })
  );


  constructor(private state: RxState<RatingsPageState>, private ratingsService: RatingsService) {
    this.state.set({
      ratings: [],
      loaded: false
    })

    const ratingsLoader = this.ratingsService.getRatings();

    this.state.connect('ratings', ratingsLoader);
    ratingsLoader.subscribe(() => {
      console.log('loaded');
      this.state.set({loaded: true});
    });

    this.ratings$.subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }
}
