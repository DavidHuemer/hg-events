import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RatingsPageComponent} from "./pages/ratings-page/ratings-page.component";
import {NewRatingPageComponent} from "./pages/new-rating-page/new-rating-page.component";

const routes: Routes = [
  {path: '', component: RatingsPageComponent},
  {path: 'new', component: NewRatingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule { }
