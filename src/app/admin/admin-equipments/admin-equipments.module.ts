import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminEquipmentsRoutingModule} from './admin-equipments-routing.module';
import {AdminEquipmentsPageComponent} from './pages/admin-equipments-page/admin-equipments-page.component';
import {AdminRatingsModule} from "../admin-ratings/admin-ratings.module";
import {AdminModule} from "../admin.module";
import {AdminEquipmentRowComponent} from './components/admin-equipment-row/admin-equipment-row.component';
import {EditEquipmentPageComponent} from './pages/edit-equipment-page/edit-equipment-page.component';


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
    AdminModule
  ]
})
export class AdminEquipmentsModule {
}
