import { Message } from "./Message";

export interface Response<T> {
  message: Message[];
  body: T;
  status: number;
  status_code: number;
  error: boolean;
}

export const initResponse = <T>(model: T): Response<T> => {
  return {
    message: [],
    body: model,
    status: 0,
    status_code: 0,
    error: true,
  };
};
