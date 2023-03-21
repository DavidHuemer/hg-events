import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminEquipmentsRoutingModule} from './admin-equipments-routing.module';
import {AdminEquipmentsPageComponent} from './pages/admin-equipments-page/admin-equipments-page.component';
import {AdminRatingsModule} from "../admin-ratings/admin-ratings.module";
import {AdminModule} from "../admin.module";


@NgModule({
  declarations: [
    AdminEquipmentsPageComponent
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
