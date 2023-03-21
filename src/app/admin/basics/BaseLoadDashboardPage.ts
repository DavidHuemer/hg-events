import {BaseDashboardPage} from "./BaseDashboardPage";
import {RxState} from "@rx-angular/state";
import {AdminGlobalState} from "../../core/states/AdminGlobalState";
import {LoadingHandler, LoadingState} from "../../core/basics/loader/LoadingHandler";
import {Observable} from "rxjs";

export abstract class BaseLoadDashboardPage<T> extends BaseDashboardPage {
  isLoading$: Observable<boolean>;
  content$: Observable<T>
  protected loadingHandler: LoadingHandler<T>;

  protected constructor(globalState: RxState<AdminGlobalState>, state: RxState<LoadingState<T>>) {
    super(globalState);
    this.loadingHandler = new LoadingHandler<T>(state);
    this.isLoading$ = this.loadingHandler.getIsLoading();
    this.content$ = this.loadingHandler.getContent();
  }

  protected load(obs: Observable<T>): void {
    this.loadingHandler.load(obs);
  }
}
