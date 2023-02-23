import {Component, OnInit} from '@angular/core';
import {EquipmentsService} from "../../../../core/services/equipments/equipments.service";
import {RxState} from "@rx-angular/state";
import {LoadableListPage} from "../../../basics/LoadableListPage";
import {LoadableListState} from "../../../../core/states/LoadableState";
import {Equipment} from "../../../../core/models/equipment";
import {Observable} from "rxjs";

interface EquipmentsPageState extends LoadableListState<Equipment[]> {

}

@Component({
  selector: 'app-equipments-page',
  templateUrl: './equipments-page.component.html',
  styleUrls: ['./equipments-page.component.scss'],
  providers: [RxState]
})
export class EquipmentsPageComponent extends LoadableListPage<Equipment> implements OnInit {

  constructor(state: RxState<EquipmentsPageState>, private equipmentsService: EquipmentsService) {
    super(state);
  }

  ngOnInit(): void {
    this.setup();
  }

  protected loadContent(): Observable<Equipment[]> {
    return this.equipmentsService.getEquipments();
  }

}
