import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminEquipmentsPageComponent} from "./pages/admin-equipments-page/admin-equipments-page.component";
import {EditEquipmentPageComponent} from "./pages/edit-equipment-page/edit-equipment-page.component";

const routes: Routes = [
  {path: '', component: AdminEquipmentsPageComponent},
  {path: ':id', component: EditEquipmentPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEquipmentsRoutingModule {
}
