import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {
        path: 'ratings',
        loadChildren: () => import('./admin-ratings/admin-ratings.module').then(m => m.AdminRatingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
