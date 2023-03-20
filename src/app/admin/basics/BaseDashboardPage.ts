/**
 * Base class for all dashboard pages
 */
import {RxState} from "@rx-angular/state";
import {AdminGlobalState} from "../../core/states/AdminGlobalState";

export abstract class BaseDashboardPage {
  protected constructor(protected globalState: RxState<AdminGlobalState>) {
    this.setTitle(this.getTitle());
  }

  protected setTitle(title: string): void {
    this.globalState.set({pageTitle: title});
  }

  protected abstract getTitle(): string;
}
