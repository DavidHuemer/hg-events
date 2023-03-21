import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminEquipmentsRoutingModule} from './admin-equipments-routing.module';
import {AdminEquipmentsPageComponent} from './pages/admin-equipments-page/admin-equipments-page.component';
import {AdminRatingsModule} from "../admin-ratings/admin-ratings.module";
import {AdminModule} from "../admin.module";
import {AdminEquipmentRowComponent} from './components/admin-equipment-row/admin-equipment-row.component';
import {EditEquipmentPageComponent} from './pages/edit-equipment-page/edit-equipment-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AdminEquipmentsPageComponent,
    AdminEquipmentRowComponent,
    EditEquipmentPageComponent
  ],
  imports: [
    CommonModule,
    AdminEquipmentsRoutingModule,
    AdminRatingsModule,
    AdminModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminEquipmentsModule {
}
