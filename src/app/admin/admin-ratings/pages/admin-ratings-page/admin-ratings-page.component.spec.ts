import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatingsPageComponent } from './admin-ratings-page.component';

describe('AdminRatingsPageComponent', () => {
  let component: AdminRatingsPageComponent;
  let fixture: ComponentFixture<AdminRatingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRatingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRatingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
