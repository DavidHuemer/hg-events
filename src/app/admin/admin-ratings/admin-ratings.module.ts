import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRatingsRoutingModule } from './admin-ratings-routing.module';
import { AdminRatingsPageComponent } from './pages/admin-ratings-page/admin-ratings-page.component';


@NgModule({
  declarations: [
    AdminRatingsPageComponent
  ],
  imports: [
    CommonModule,
    AdminRatingsRoutingModule
  ]
})
export class AdminRatingsModule { }
