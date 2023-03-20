import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipmentsRoutingModule} from './equipments-routing.module';
import {EquipmentsPageComponent} from './pages/equipments-page/equipments-page.component';
import {SharedModule} from "../../shared/shared.module";
import {LetModule} from "@rx-angular/template/let";
import {EquipmentComponent} from './components/equipment/equipment.component';
import {MatButtonModule} from "@angular/material/button";
import {EquipmentDetailsPageComponent} from './pages/equipment-details-page/equipment-details-page.component';
import {EquipmentDetailComponent} from './components/equipment-detail/equipment-detail.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    EquipmentsPageComponent,
    EquipmentComponent,
    EquipmentDetailsPageComponent,
    EquipmentDetailComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    SharedModule,
    LetModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EquipmentsModule {
}
