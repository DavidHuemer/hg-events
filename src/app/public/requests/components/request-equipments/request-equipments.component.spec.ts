import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestEquipmentsComponent} from './request-equipments.component';

describe('RequestEquipmentsComponent', () => {
  let component: RequestEquipmentsComponent;
  let fixture: ComponentFixture<RequestEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestEquipmentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
