import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLnComponent } from './material-ln.component';

describe('MaterialLnComponent', () => {
  let component: MaterialLnComponent;
  let fixture: ComponentFixture<MaterialLnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialLnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialLnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
