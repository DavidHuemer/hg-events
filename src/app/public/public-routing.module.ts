import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicPageComponent} from "./pages/public-page/public-page.component";

const routes: Routes = [
  {
    path: '', component: PublicPageComponent, children: [
      {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'equipments', loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule)},
      {path: 'ratings', loadChildren: () => import('./ratings/ratings.module').then(m => m.RatingsModule)},
      {path: 'requests', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)},
      {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
