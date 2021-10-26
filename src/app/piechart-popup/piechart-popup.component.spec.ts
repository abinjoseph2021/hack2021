import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartPopupComponent } from './piechart-popup.component';

describe('PiechartPopupComponent', () => {
  let component: PiechartPopupComponent;
  let fixture: ComponentFixture<PiechartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechartPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
