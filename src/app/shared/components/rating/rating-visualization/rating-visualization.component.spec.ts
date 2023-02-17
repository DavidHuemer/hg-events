import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingVisualizationComponent } from './rating-visualization.component';

describe('RatingVisualizationComponent', () => {
  let component: RatingVisualizationComponent;
  let fixture: ComponentFixture<RatingVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingVisualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
