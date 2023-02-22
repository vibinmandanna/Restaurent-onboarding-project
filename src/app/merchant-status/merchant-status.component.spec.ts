import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStatusComponent } from './merchant-status.component';

describe('MerchantStatusComponent', () => {
  let component: MerchantStatusComponent;
  let fixture: ComponentFixture<MerchantStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
