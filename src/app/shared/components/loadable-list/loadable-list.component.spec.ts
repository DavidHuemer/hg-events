import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadableListComponent } from './loadable-list.component';

describe('LoadableListComponent', () => {
  let component: LoadableListComponent;
  let fixture: ComponentFixture<LoadableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
