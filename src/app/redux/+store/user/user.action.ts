import { createAction,props } from '@ngrx/store';
import { Book } from '../../../interfaces/book';
import { User } from '../../../interfaces/user-jsonFreeApi';
import {Post} from '../../../interfaces/post-jsonFreeApi';
import { createEffect } from '@ngrx/effects';

const namespace='[user]';
export const addUsers = createAction(`${namespace} add`,props<{ userList: User[] }>());
export const selectUser = createAction(`${namespace} select`,props<{ userId: number }>());
export const deleteUser = createAction(`${namespace} delete`,props<{ userId: number }>());
export const seedBooks = createAction(`${namespace} seed book`,props<{ bookList: (Book)[] }>());
export const addBookToUser = createAction(`${namespace} add book`,props<{ book: Book }>());
export const testEffect = createAction(`${namespace} test effect`,);
export const seedPosts = createAction(`${namespace} seed post`,props<{ fakeParam: number }>());
export const seedPostsSuccess = createAction(`${namespace} seed post success`, props<{ postList: Post[] }>());
export const seedPostsFail = createAction(`${namespace} seed post fail`, props<{ errorMsg: string }>());
export const seedPostsCancel = createAction(`${namespace} seed post cancel`,); //In case of user leave component 
export const clearState = createAction(`${namespace} clear state`);
export const clearAppState = createAction(`clear app state`);
export const setToken = createAction(`${namespace}  set token`,props<{ token: string | null }>())
export const initAction = createAction(`${namespace}  init`,)