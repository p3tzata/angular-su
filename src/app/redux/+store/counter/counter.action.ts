import { createAction,props } from '@ngrx/store';

export const incrementCounter = createAction('[Counter69] Increment',); //Explain: this string must be unique
export const decrementCounter = createAction('[Counter] Decrement');
export const resetCounter = createAction('[Counter] Reset',props<{ timestamp: number; }>());
