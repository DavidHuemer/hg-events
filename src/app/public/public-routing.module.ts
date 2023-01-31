import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PublicPageComponent} from "./pages/public-page/public-page.component";
import {EquipmentsPageComponent} from "./pages/equipments-page/equipments-page.component";

const routes: Routes = [
  {
    path: '', component: PublicPageComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'equipments', component: EquipmentsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
