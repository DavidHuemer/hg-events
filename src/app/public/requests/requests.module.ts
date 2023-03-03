import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestsRoutingModule} from './requests-routing.module';
import {RequestPageComponent} from './pages/request-page/request-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RequestEquipmentsComponent} from './components/request-equipments/request-equipments.component';
import {SharedModule} from "../../shared/shared.module";
import {RequestEquipmentComponent} from './components/request-equipment/request-equipment.component';
import {LetModule} from "@rx-angular/template/let";


@NgModule({
  declarations: [
    RequestPageComponent,
    RequestEquipmentsComponent,
    RequestEquipmentComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    LetModule
  ]
})
export class RequestsModule {
}
