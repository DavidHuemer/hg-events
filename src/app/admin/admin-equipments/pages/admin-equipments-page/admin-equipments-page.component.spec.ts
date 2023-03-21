import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminEquipmentsPageComponent} from './admin-equipments-page.component';

describe('AdminEquipmentsPageComponent', () => {
  let component: AdminEquipmentsPageComponent;
  let fixture: ComponentFixture<AdminEquipmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEquipmentsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminEquipmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
