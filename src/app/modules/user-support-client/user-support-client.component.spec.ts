import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSupportClientComponent } from './user-support-client.component';

describe('UserSupportClientComponent', () => {
  let component: UserSupportClientComponent;
  let fixture: ComponentFixture<UserSupportClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSupportClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSupportClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
