import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleBillingComponent } from './oracle-billing.component';

describe('OracleBillingComponent', () => {
  let component: OracleBillingComponent;
  let fixture: ComponentFixture<OracleBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracleBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
