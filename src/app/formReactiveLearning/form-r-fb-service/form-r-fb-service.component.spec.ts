import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRFbServiceComponent } from './form-r-fb-service.component';

describe('FormRFbServiceComponent', () => {
  let component: FormRFbServiceComponent;
  let fixture: ComponentFixture<FormRFbServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRFbServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRFbServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
