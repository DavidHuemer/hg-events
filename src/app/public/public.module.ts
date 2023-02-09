import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import { PublicPageComponent } from './pages/public-page/public-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { EquipmentsPageComponent } from './pages/equipments-page/equipments-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicPageComponent,
    EquipmentsPageComponent
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
