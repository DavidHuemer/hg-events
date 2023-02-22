import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRatingPageComponent } from './new-rating-page.component';

describe('NewRatingPageComponent', () => {
  let component: NewRatingPageComponent;
  let fixture: ComponentFixture<NewRatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRatingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
