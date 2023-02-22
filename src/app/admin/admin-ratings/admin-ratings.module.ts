import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRatingsRoutingModule } from './admin-ratings-routing.module';
import { AdminRatingsPageComponent } from './pages/admin-ratings-page/admin-ratings-page.component';
import {ScrollTableComponent} from "../components/scroll-table/scroll-table.component";
import {AdminModule} from "../admin.module";


@NgModule({
  declarations: [
    AdminRatingsPageComponent,
    ScrollTableComponent
  ],
  imports: [
    CommonModule,
    AdminRatingsRoutingModule,
    AdminModule
  ]
})
export class AdminRatingsModule { }
