import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestsRoutingModule} from './requests-routing.module';
import {RequestPageComponent} from './pages/request-page/request-page.component';


@NgModule({
  declarations: [
    RequestPageComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule {
}
