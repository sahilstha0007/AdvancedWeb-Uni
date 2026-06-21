import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDetailsPage } from './laptop-details.js';

describe('LaptopDetailsTs', () => {
  let component: LaptopDetailsPage;
  let fixture: ComponentFixture<LaptopDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
