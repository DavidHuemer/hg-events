import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import { PublicPageComponent } from './pages/public-page/public-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PublicPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class PublicModule { }
