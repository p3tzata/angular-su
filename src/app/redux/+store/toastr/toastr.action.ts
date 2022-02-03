import { createAction, props } from "@ngrx/store";

const namespace='[toastr]';
export const showSuccess = createAction(`${namespace} show success`,props<{ title: string, message: string }>());
export const showFail = createAction(`${namespace} show fail`,props<{ title: string, message: string }>());