
import { IUserState } from "./user.reducer";
export const selectUser = (state: IUserState) => state.selectedUser;
export const selectAllBooks = (state: IUserState) => state.booksList;


