import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminRatingsPageComponent} from "./pages/admin-ratings-page/admin-ratings-page.component";
import {EditRatingAdminPageComponent} from "./pages/edit-rating-admin-page/edit-rating-admin-page.component";

const routes: Routes = [
  {path: '', component: AdminRatingsPageComponent},
  {path: ':id', component: EditRatingAdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRatingsRoutingModule {
}
