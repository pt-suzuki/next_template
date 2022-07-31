export module ApiUri {
  const BASE_URL: string = `/api/`;

  export module OAUTH {
    const TMP_OAUTH: string = `/oauth/`;
    export const ACCESS_TOKEN = `${TMP_OAUTH}token/`;
    export const LOGIN_CHECK = `${BASE_URL}login/check`;
    export const LOGIN_HISTORY = `${BASE_URL}login/history`;
    export const ADMIN_CHECK = `${BASE_URL}login/admin`;
  }
  export module USER {
    const TMP_USER: string = `${BASE_URL}user`;
    export const BASIC = TMP_USER;
    export const CURRENT = `${TMP_USER}/current`;
  }
}
