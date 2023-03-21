import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditEquipmentPageComponent} from './edit-equipment-page.component';

describe('EditEquipmentPageComponent', () => {
  let component: EditEquipmentPageComponent;
  let fixture: ComponentFixture<EditEquipmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEquipmentPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditEquipmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
