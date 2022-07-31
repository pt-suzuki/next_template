import { configureStore } from '@reduxjs/toolkit';
import { userSlice, CurrentUserState } from './slices/user';
import { messageSlice, MessageState } from './slices/message';

export interface State {
  currentUser: CurrentUserState;
  message: MessageState;
}

interface Actions {
  userSlice: typeof userSlice.actions;
  messageSlice: typeof messageSlice.actions;
}

export const actions: Actions = {
  userSlice: userSlice.actions,
  messageSlice: messageSlice.actions,
};

interface Reducer {
  currentUser: typeof userSlice.reducer;
  message: typeof messageSlice.reducer;
}

const reducer: Reducer = {
  currentUser: userSlice.reducer,
  message: messageSlice.reducer,
};

export const store = configureStore({
  reducer,
  // non-serializable valueのconsole errorが発生するため、シリアライズチェックをスキップして暫定対応
  // <https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data>
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'currentUser/mutateCurrentUser',
        ],
      },
    }),
});
