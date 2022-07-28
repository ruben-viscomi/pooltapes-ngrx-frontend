import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesDashComponent } from './favorites-dash.component';

describe('FavoritesDashComponent', () => {
  let component: FavoritesDashComponent;
  let fixture: ComponentFixture<FavoritesDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
