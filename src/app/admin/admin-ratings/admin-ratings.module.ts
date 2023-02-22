import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRatingsRoutingModule } from './admin-ratings-routing.module';
import { AdminRatingsPageComponent } from './pages/admin-ratings-page/admin-ratings-page.component';
import {ScrollTableComponent} from "../components/scroll-table/scroll-table.component";
import {AdminModule} from "../admin.module";
import { EditRatingAdminPageComponent } from './pages/edit-rating-admin-page/edit-rating-admin-page.component';


@NgModule({
  declarations: [
    AdminRatingsPageComponent,
    ScrollTableComponent,
    EditRatingAdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRatingsRoutingModule,
    AdminModule
  ]
})
export class AdminRatingsModule { }
