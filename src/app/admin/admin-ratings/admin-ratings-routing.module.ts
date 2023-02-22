import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminRatingsPageComponent} from "./pages/admin-ratings-page/admin-ratings-page.component";

const routes: Routes = [
  {path: '', component: AdminRatingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRatingsRoutingModule {
}
