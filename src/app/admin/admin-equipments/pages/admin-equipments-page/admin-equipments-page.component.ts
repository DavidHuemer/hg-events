import {Component, Inject, OnInit} from '@angular/core';
import {Equipment, EquipmentDto} from "../../../../core/models/equipment";
import {ADMIN_GLOBAL_RX_STATE, AdminGlobalState} from "../../../../core/states/AdminGlobalState";
import {RxState} from "@rx-angular/state";
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionLoadingState} from "../../../../core/basics/loader/CollectionLoadingHandler";
import {BaseEditableCollectionDashboardPage} from "../../../basics/BaseEditableCollectionDashboardPage";
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";

interface EquipmentsPageState extends CollectionLoadingState<Equipment> {

}

@Component({
  selector: 'app-admin-equipments-page',
  templateUrl: './admin-equipments-page.component.html',
  styleUrls: ['./admin-equipments-page.component.scss'],
  providers: [RxState]
})
export class AdminEquipmentsPageComponent extends BaseEditableCollectionDashboardPage<Equipment, EquipmentDto> implements OnInit {

  headers: string[] = ["Bild", "Name", "Details", "Aktion"];

  constructor(@Inject(ADMIN_GLOBAL_RX_STATE) globalState: RxState<AdminGlobalState>, state: RxState<EquipmentsPageState>,
              firebaseService: EquipmentsService, router: Router, route: ActivatedRoute) {
    super(globalState, state, firebaseService, router, route);
  }

  ngOnInit(): void {
  }

  getNameOfEntity(entity: Equipment): string {
    return entity.name;
  }

  protected getTitle(): string {
    return "Equipment";
  }

}
