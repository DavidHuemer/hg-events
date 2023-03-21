import {LoadingHandler, LoadingState} from "./LoadingHandler";
import {RxState} from "@rx-angular/state";
import {combineLatest, map} from "rxjs";
import {LoadableContainerStatus} from "../../../shared/components/loadable-list/loadable-list.component";

export interface CollectionLoadingState<T> extends LoadingState<T[]> {

}

/**
 * Handles the loading of a collection
 */
export class CollectionLoadingHandler<T> extends LoadingHandler<T[]> {
  constructor(state: RxState<CollectionLoadingState<T>>) {
    super(state);
  }

  getStatus() {
    return combineLatest([this.state.select('isLoading'), this.getContent()]).pipe(
      map(([isLoading, arr]) => {
        if (isLoading) return LoadableContainerStatus.LOADING;

        if (arr.length == 0) return LoadableContainerStatus.EMPTY;

        return LoadableContainerStatus.SHOWING;
      }));
  }
}
