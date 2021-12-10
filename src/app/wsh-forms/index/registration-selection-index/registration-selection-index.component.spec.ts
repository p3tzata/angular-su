import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSelectionIndexComponent } from './registration-selection-index.component';

describe('RegistrationSelectionIndexComponent', () => {
  let component: RegistrationSelectionIndexComponent;
  let fixture: ComponentFixture<RegistrationSelectionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSelectionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSelectionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
