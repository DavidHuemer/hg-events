import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadableListComponent } from './components/loadable-list/loadable-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { RatingStarComponent } from './components/rating/rating-star/rating-star.component';
import { RatingVisualizationComponent } from './components/rating/rating-visualization/rating-visualization.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        LoadableListComponent,
        RatingStarComponent,
        RatingVisualizationComponent
    ],
  exports: [
    LoadableListComponent,
    RatingVisualizationComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class SharedModule { }
