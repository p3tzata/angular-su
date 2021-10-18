import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDbPageLandingComponent } from './movies-db-page-landing.component';

describe('MoviesDbPageLandingComponent', () => {
  let component: MoviesDbPageLandingComponent;
  let fixture: ComponentFixture<MoviesDbPageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDbPageLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDbPageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
