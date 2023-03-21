import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminEquipmentRowComponent} from './admin-equipment-row.component';

describe('AdminEquipmentRowComponent', () => {
  let component: AdminEquipmentRowComponent;
  let fixture: ComponentFixture<AdminEquipmentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEquipmentRowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminEquipmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
