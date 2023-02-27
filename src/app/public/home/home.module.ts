import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {WelcomeAreaComponent} from './components/welcome-area/welcome-area.component';
import {HomeOverviewAreaComponent} from './components/home-overview-area/home-overview-area.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HomeOverviewItemComponent} from './components/home-overview-item/home-overview-item.component';
import {WelcomeTitleComponent} from './components/welcome-title/welcome-title.component';


@NgModule({
  declarations: [
    HomePageComponent,
    WelcomeAreaComponent,
    HomeOverviewAreaComponent,
    HomeOverviewItemComponent,
    WelcomeTitleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule { }
