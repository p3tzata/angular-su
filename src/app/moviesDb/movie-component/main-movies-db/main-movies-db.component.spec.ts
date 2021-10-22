import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoviesDbComponent } from './main-movies-db.component';

describe('MainMoviesDbComponent', () => {
  let component: MainMoviesDbComponent;
  let fixture: ComponentFixture<MainMoviesDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMoviesDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMoviesDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
