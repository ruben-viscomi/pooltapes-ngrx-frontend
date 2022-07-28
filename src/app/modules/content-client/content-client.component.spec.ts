import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentClientComponent } from './content-client.component';

describe('ContentClientComponent', () => {
  let component: ContentClientComponent;
  let fixture: ComponentFixture<ContentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
