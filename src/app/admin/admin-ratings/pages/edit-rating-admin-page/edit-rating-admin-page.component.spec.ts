import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRatingAdminPageComponent } from './edit-rating-admin-page.component';

describe('EditRatingAdminPageComponent', () => {
  let component: EditRatingAdminPageComponent;
  let fixture: ComponentFixture<EditRatingAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRatingAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRatingAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
