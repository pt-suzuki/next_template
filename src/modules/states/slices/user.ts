import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '~/modules/domains/user/user';

export type CurrentUserState = {
  currentUser?: User;
};

const initCurrentUser: CurrentUserState = {
  currentUser: undefined,
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState: initCurrentUser,
  reducers: {
    mutateCurrentUser: (state, action: PayloadAction<CurrentUserState['currentUser']>) => ({
      ...state,
      currentUser: action.payload,
    }),
  },
});
