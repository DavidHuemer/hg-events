import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipmentsRoutingModule} from './equipments-routing.module';
import {EquipmentsPageComponent} from './pages/equipments-page/equipments-page.component';


@NgModule({
  declarations: [
    EquipmentsPageComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule
  ]
})
export class EquipmentsModule {
}
