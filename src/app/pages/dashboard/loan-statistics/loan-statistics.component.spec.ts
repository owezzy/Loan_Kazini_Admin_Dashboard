import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStatisticsComponent } from './loan-statistics.component';

describe('LoanStatisticsComponent', () => {
  let component: LoanStatisticsComponent;
  let fixture: ComponentFixture<LoanStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
