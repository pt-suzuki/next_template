import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
  id?: number;
  message: string;
  type: 'success' | 'error' | 'notice' | 'info';
  options?: {
    linkRel?: string;
    linkTarget?: string;
    linkTitle?: string;
    linkUrl?: string;
    onLinkClick?: () => unknown;
  };
};

export type MessageState = {
  messageList: Message[];
};

const initMessageList: MessageState = {
  messageList: [],
};
let sequence = 0;
export const messageSlice = createSlice({
  name: 'messageList',
  initialState: initMessageList,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => ({
      ...state,
      messageList: [...state.messageList, { ...action.payload, id: sequence++ }],
    }),
    removeMessage: (state, action: PayloadAction<Message>) => ({
      ...state,
      messageList: state.messageList.filter((message) => message.id !== action.payload.id),
    }),
  },
});
