import {Observable} from "rxjs";
import {RxState} from "@rx-angular/state";
import {LoadableState} from "../../core/states/LoadableState";

export abstract class LoadablePage<T> {
  isLoading$: Observable<boolean>;
  content$: Observable<T | null>;

  private state: RxState<LoadableState<T>>;

  protected constructor(state: RxState<LoadableState<T>>) {
    this.state = state;
    this.isLoading$ = state.select('isLoading');
    this.content$ = state.select('loadedContent');
    state.set({
      isLoading: true,
      loadedContent: null
    });
  }

  setup(): void {
    const contentObs = this.loadContent();
    this.state.connect('loadedContent', contentObs);
    contentObs.subscribe(() => {
      this.state.set({isLoading: false});
    });
  }

  protected abstract loadContent(): Observable<T>;
}
