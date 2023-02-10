import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuestbookPageComponent} from "./admin-guestbook-page/admin-guestbook-page.component";

const routes: Routes = [
  {path: '', component: AdminGuestbookPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGuestbookRoutingModule {
}
