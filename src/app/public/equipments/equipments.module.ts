import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipmentsRoutingModule} from './equipments-routing.module';
import {EquipmentsPageComponent} from './pages/equipments-page/equipments-page.component';
import {SharedModule} from "../../shared/shared.module";
import {LetModule} from "@rx-angular/template/let";
import {EquipmentComponent} from './components/equipment/equipment.component';


@NgModule({
  declarations: [
    EquipmentsPageComponent,
    EquipmentComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    SharedModule,
    LetModule
  ]
})
export class EquipmentsModule {
}
