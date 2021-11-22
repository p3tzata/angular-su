import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouterOutledComponent } from './child-router-outled.component';

describe('ChildRouterOutledComponent', () => {
  let component: ChildRouterOutledComponent;
  let fixture: ComponentFixture<ChildRouterOutledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouterOutledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouterOutledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
