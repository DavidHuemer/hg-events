import {Component, Inject, OnInit} from '@angular/core';
import {PUBLIC_GLOBAL_RX_STATE, PublicGlobalState} from "../../../../core/states/PublicGlobalState";
import {RxState} from "@rx-angular/state";

@Component({
  selector: 'app-request-equipments',
  templateUrl: './request-equipments.component.html',
  styleUrls: ['./request-equipments.component.scss']
})
export class RequestEquipmentsComponent implements OnInit {

  requestEquipments$ = this.state.select('requestEquipments');

  constructor(@Inject(PUBLIC_GLOBAL_RX_STATE) private state: RxState<PublicGlobalState>) {

  }

  ngOnInit(): void {
  }

}
