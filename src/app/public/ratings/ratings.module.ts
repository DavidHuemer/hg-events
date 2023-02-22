import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingsRoutingModule } from './ratings-routing.module';
import { RatingsPageComponent } from './pages/ratings-page/ratings-page.component';
import { RatingSystemComponent } from './components/rating-system/rating-system.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../shared/shared.module";
import {LetModule} from "@rx-angular/template/let";
import { RatingComponent } from './components/rating/rating.component';
import { NewRatingPageComponent } from './pages/new-rating-page/new-rating-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RatingsPageComponent,
    RatingSystemComponent,
    RatingComponent,
    NewRatingPageComponent
  ],
  imports: [
    CommonModule,
    RatingsRoutingModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    LetModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RatingsModule { }
