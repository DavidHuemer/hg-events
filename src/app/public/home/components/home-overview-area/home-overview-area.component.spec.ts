import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOverviewAreaComponent } from './home-overview-area.component';

describe('HomeOverviewAreaComponent', () => {
  let component: HomeOverviewAreaComponent;
  let fixture: ComponentFixture<HomeOverviewAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOverviewAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOverviewAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
