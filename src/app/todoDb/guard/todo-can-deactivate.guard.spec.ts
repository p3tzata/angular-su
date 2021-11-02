import { TestBed } from '@angular/core/testing';

import { TodoCanDeactivateGuard } from './todo-can-deactivate.guard';

describe('TodoCanDeactivateGuard', () => {
  let guard: TodoCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodoCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
