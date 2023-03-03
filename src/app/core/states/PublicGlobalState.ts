import {InjectionToken} from "@angular/core";
import {RxState} from "@rx-angular/state";

export interface PublicGlobalState {
  requestEquipments: string[];
}

export const PUBLIC_GLOBAL_RX_STATE = new InjectionToken<RxState<PublicGlobalState>>(
  'GLOBAL_RX_STATE'
);
