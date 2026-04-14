import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sectionbanner } from './sectionbanner';

describe('Sectionbanner', () => {
  let component: Sectionbanner;
  let fixture: ComponentFixture<Sectionbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sectionbanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Sectionbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
