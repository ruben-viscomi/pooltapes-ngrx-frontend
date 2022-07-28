import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalClientComponent } from './technical-client.component';

describe('TechnicalClientComponent', () => {
  let component: TechnicalClientComponent;
  let fixture: ComponentFixture<TechnicalClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
