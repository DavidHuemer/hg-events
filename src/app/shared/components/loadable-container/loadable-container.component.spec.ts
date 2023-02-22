import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadableContainerComponent} from './loadable-container.component';

describe('LoadableContainerComponent', () => {
  let component: LoadableContainerComponent;
  let fixture: ComponentFixture<LoadableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadableContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoadableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
