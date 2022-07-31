export interface SignInForm {
  username: string;
  password: string;
  secret_id: string;
  secret_key: string;
}

export const initSignInForm = (): SignInForm => ({
  username: '',
  password: '',
  secret_id: '1',
  secret_key: 'dit7Doj9EWP8hYgPtsy7Kivfz1TI5MjaJxvcGh8N'
});

export type SignInFormJson = {
  [key: string]: string;
};