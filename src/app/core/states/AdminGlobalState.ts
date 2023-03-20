import {InjectionToken} from "@angular/core";
import {RxState} from "@rx-angular/state";

export interface AdminGlobalState {
  pageTitle: string;
}

export const ADMIN_GLOBAL_RX_STATE = new InjectionToken<RxState<AdminGlobalState>>(
  'GLOBAL_ADMIN_RX_STATE'
);
