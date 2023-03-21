import {RxState} from "@rx-angular/state";
import {Observable} from "rxjs";

export interface LoadingState<T> {
  isLoading: boolean;
  content: T;
}

/**
 * Handles the loading
 */
export class LoadingHandler<T> {
  constructor(protected state: RxState<LoadingState<T>>) {
    this.state.set({isLoading: true})

    state.select('content').subscribe(() => {
      this.state.set({isLoading: false});
    });
  }

  getIsLoading() {
    return this.state.select('isLoading');
  }

  getContent() {
    return this.state.select('content');
  }

  load(obs: Observable<T>) {
    this.state.connect('content', obs);
  }
}
