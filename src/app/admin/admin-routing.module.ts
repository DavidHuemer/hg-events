import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {
        path: 'guestbook',
        loadChildren: () => import('./admin-guestbook/admin-guestbook.module').then(m => m.AdminGuestbookModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
