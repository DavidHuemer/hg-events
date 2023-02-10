import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminGuestbookPageComponent} from './admin-guestbook-page.component';

describe('AdminGuestbookPageComponent', () => {
  let component: AdminGuestbookPageComponent;
  let fixture: ComponentFixture<AdminGuestbookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGuestbookPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminGuestbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
