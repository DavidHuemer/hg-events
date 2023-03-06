import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {ContactComponent} from './components/contact/contact.component';
import {ContactMapComponent} from './components/contact-map/contact-map.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ContactInfosComponent} from './components/contact-infos/contact-infos.component';
import {ContactInfoComponent} from './components/contact-info/contact-info.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactComponent,
    ContactMapComponent,
    ContactInfosComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ContactModule {
}
