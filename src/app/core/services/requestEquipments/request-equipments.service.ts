import {Inject, Injectable} from '@angular/core';
import {PUBLIC_GLOBAL_RX_STATE, PublicGlobalState} from "../../states/PublicGlobalState";
import {RxState} from "@rx-angular/state";

@Injectable({
  providedIn: 'root'
})
export class RequestEquipmentsService {

  public static readonly REQUEST_EQUIPMENTS_KEY = "requestEquipments";

  constructor(@Inject(PUBLIC_GLOBAL_RX_STATE) private state: RxState<PublicGlobalState>) {
    this.state.set({
      requestEquipments: this.loadRequestEquipments()
    });
  }

  addRequestEquipment(equipmentId: string) {
    const requestEquipments = this.loadRequestEquipments();
    if (!requestEquipments.includes(equipmentId)) {
      requestEquipments.push(equipmentId);
      this.saveRequestEquipments(requestEquipments);
      this.state.set({requestEquipments: requestEquipments});
    }
  }

  clearRequestEquipments() {
    this.saveRequestEquipments([]);
  }

  private loadRequestEquipments(): string[] {
    const requestEquipmentsString = localStorage.getItem(RequestEquipmentsService.REQUEST_EQUIPMENTS_KEY);
    if (requestEquipmentsString == null) return [];

    try {
      return JSON.parse(requestEquipmentsString);
    } catch (e: any) {
      return [];
    }
  }

  private saveRequestEquipments(requestEquipments: string[]) {
    localStorage.setItem(RequestEquipmentsService.REQUEST_EQUIPMENTS_KEY, JSON.stringify(requestEquipments));
  }
}
