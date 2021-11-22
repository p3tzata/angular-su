import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouterOutledChild2Component } from './child-router-outled-child2.component';

describe('ChildRouterOutledChild2Component', () => {
  let component: ChildRouterOutledChild2Component;
  let fixture: ComponentFixture<ChildRouterOutledChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouterOutledChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouterOutledChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
