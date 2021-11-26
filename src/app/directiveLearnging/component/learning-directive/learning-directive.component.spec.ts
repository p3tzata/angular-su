import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDirectiveComponent } from './learning-directive.component';

describe('LearningDirectiveComponent', () => {
  let component: LearningDirectiveComponent;
  let fixture: ComponentFixture<LearningDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
