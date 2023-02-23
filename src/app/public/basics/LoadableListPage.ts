import {LoadablePage} from "./LoadablePage";
import {RxState} from "@rx-angular/state";
import {LoadableListState} from "../../core/states/LoadableState";
import {combineLatest, map, Observable} from "rxjs";
import {LoadableContainerStatus} from "../../shared/components/loadable-list/loadable-list.component";

export abstract class LoadableListPage<T> extends LoadablePage<T[]> {

  status$: Observable<LoadableContainerStatus>;

  protected constructor(state: RxState<LoadableListState<T[]>>) {
    super(state);

    this.status$ = combineLatest([this.isLoading$, this.content$]).pipe(
      map(([isLoading, items]) => {
        console.log(isLoading);

        if (isLoading || items == null) return LoadableContainerStatus.LOADING;

        if (items.length == 0) return LoadableContainerStatus.EMPTY;

        return LoadableContainerStatus.SHOWING;
      })
    );
  }
}
