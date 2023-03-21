import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminEquipmentsPageComponent} from "./pages/admin-equipments-page/admin-equipments-page.component";

const routes: Routes = [
  {path: '', component: AdminEquipmentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEquipmentsRoutingModule {
}
