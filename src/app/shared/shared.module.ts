import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadableListComponent} from './components/loadable-list/loadable-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RatingStarComponent} from './components/rating/rating-star/rating-star.component';
import {RatingVisualizationComponent} from './components/rating/rating-visualization/rating-visualization.component';
import {MatIconModule} from "@angular/material/icon";
import {SaveCancelButtonsComponent} from './components/save-cancel-buttons/save-cancel-buttons.component';
import {MatButtonModule} from "@angular/material/button";
import {LoadableContainerComponent} from './components/loadable-container/loadable-container.component';
import {LoadingComponent} from './components/loading/loading.component';


@NgModule({
  declarations: [
    LoadableListComponent,
    RatingStarComponent,
    RatingVisualizationComponent,
    SaveCancelButtonsComponent,
    LoadableContainerComponent,
    LoadingComponent
  ],
  exports: [
    LoadableListComponent,
    RatingVisualizationComponent,
    SaveCancelButtonsComponent,
    LoadableContainerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule { }
