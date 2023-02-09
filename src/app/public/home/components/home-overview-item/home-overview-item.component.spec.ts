import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOverviewItemComponent } from './home-overview-item.component';

describe('HomeOverviewItemComponent', () => {
  let component: HomeOverviewItemComponent;
  let fixture: ComponentFixture<HomeOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOverviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
