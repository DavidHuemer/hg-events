import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {AdminMenuComponent} from './components/admin-menu/admin-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminMenuItemComponent} from './components/admin-menu-item/admin-menu-item.component';
import {ActionButtonsComponent} from './components/action-buttons/action-buttons.component';
import {MatButtonModule} from "@angular/material/button";
import {DashboardCardComponent} from "./components/dashboard-card/dashboard-card.component";


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminMenuComponent,
    AdminHeaderComponent,
    AdminMenuItemComponent,
    ActionButtonsComponent,
    DashboardCardComponent
  ],
  exports: [
    ActionButtonsComponent,
    DashboardCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule {
}
