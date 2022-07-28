import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingClientComponent } from './accounting-client.component';

describe('AccountingClientComponent', () => {
  let component: AccountingClientComponent;
  let fixture: ComponentFixture<AccountingClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
