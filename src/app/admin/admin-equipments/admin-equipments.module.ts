import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminEquipmentsRoutingModule} from './admin-equipments-routing.module';
import {AdminEquipmentsPageComponent} from './pages/admin-equipments-page/admin-equipments-page.component';


@NgModule({
  declarations: [
    AdminEquipmentsPageComponent
  ],
  imports: [
    CommonModule,
    AdminEquipmentsRoutingModule
  ]
})
export class AdminEquipmentsModule {
}
