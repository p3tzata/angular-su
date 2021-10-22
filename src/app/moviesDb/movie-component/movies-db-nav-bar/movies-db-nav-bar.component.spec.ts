import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDbNavBarComponent } from './movies-db-nav-bar.component';

describe('MoviesDbNavBarComponent', () => {
  let component: MoviesDbNavBarComponent;
  let fixture: ComponentFixture<MoviesDbNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDbNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDbNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
