import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {HeaderComponent} from './components/header/header/header.component';
import {FooterComponent} from './components/footer/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {PublicPageComponent} from './pages/public-page/public-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {EquipmentsPageComponent} from './pages/equipments-page/equipments-page.component';
import {SocialMediaButtonComponent} from './components/social-media-button/social-media-button.component';
import {FooterBottomComponent} from './components/footer/footer-bottom/footer-bottom.component';
import {FooterContactComponent} from './components/footer/footer-contact/footer-contact.component';
import {FooterSocialMediaComponent} from './components/footer/footer-social-media/footer-social-media.component';
import {PublicNavigationComponent} from './components/header/public-navigation/public-navigation.component';
import {HeaderLogoComponent} from './components/header/header-logo/header-logo.component';
import {FooterLinksComponent} from './components/footer/footer-links/footer-links.component';
import {FooterMessageComponent} from './components/footer/footer-message/footer-message.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicPageComponent,
    EquipmentsPageComponent,
    SocialMediaButtonComponent,
    FooterBottomComponent,
    FooterContactComponent,
    FooterSocialMediaComponent,
    PublicNavigationComponent,
    HeaderLogoComponent,
    FooterLinksComponent,
    FooterMessageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PublicModule { }
