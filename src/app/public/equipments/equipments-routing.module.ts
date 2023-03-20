import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentsPageComponent} from "./pages/equipments-page/equipments-page.component";
import {EquipmentDetailsPageComponent} from "./pages/equipment-details-page/equipment-details-page.component";

const routes: Routes = [
  {path: '', component: EquipmentsPageComponent},
  {path: ':id', component: EquipmentDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule {
}
