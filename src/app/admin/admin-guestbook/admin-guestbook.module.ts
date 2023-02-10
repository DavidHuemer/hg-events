import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminGuestbookRoutingModule} from './admin-guestbook-routing.module';
import {AdminGuestbookPageComponent} from './admin-guestbook-page/admin-guestbook-page.component';


@NgModule({
  declarations: [
    AdminGuestbookPageComponent
  ],
  imports: [
    CommonModule,
    AdminGuestbookRoutingModule
  ]
})
export class AdminGuestbookModule {
}
