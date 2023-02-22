import {RxState} from "@rx-angular/state";
import {Observable} from "rxjs";

export interface LoadableState {
  isLoading: boolean;
}

export abstract class LoadableDashboardPage {
  public isLoading$: Observable<boolean>;

  protected constructor(state: RxState<LoadableState>) {
    state.set({
      isLoading: true
    });

    this.isLoading$ = state.select('isLoading');
  }
}
