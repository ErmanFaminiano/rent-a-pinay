import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSectionComponent } from './landing-page-section.component';

describe('LandingPageSectionComponent', () => {
  let component: LandingPageSectionComponent;
  let fixture: ComponentFixture<LandingPageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageSectionComponent]
    });
    fixture = TestBed.createComponent(LandingPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
