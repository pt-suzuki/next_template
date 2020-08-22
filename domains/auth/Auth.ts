export interface Auth {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export const initAuth = (): Auth => ({
  access_token: '',
  refresh_token: '',
  expires_in: 0
});
