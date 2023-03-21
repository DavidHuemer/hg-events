import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditEquipmentImageComponent} from './edit-equipment-image.component';

describe('EditEquipmentImageComponent', () => {
  let component: EditEquipmentImageComponent;
  let fixture: ComponentFixture<EditEquipmentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEquipmentImageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditEquipmentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
