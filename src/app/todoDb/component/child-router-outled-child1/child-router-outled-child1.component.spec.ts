import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouterOutledChild1Component } from './child-router-outled-child1.component';

describe('ChildRouterOutledChild1Component', () => {
  let component: ChildRouterOutledChild1Component;
  let fixture: ComponentFixture<ChildRouterOutledChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouterOutledChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouterOutledChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
