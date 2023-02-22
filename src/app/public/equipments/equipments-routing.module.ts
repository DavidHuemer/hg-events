import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentsPageComponent} from "./pages/equipments-page/equipments-page.component";

const routes: Routes = [
  {path: '', component: EquipmentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule {
}
