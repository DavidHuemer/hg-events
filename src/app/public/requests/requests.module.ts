import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestsRoutingModule} from './requests-routing.module';
import {RequestPageComponent} from './pages/request-page/request-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RequestPageComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RequestsModule {
}
