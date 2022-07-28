import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDashComponent } from './series-dash.component';

describe('SeriesDashComponent', () => {
  let component: SeriesDashComponent;
  let fixture: ComponentFixture<SeriesDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
