import * as Axios from "axios";
import { Token } from "../../enums/token";
import { ApiUri } from "../../enums/api_uri";

const create_csrf_token = (): string => {
  if (!process.browser) {
    return "";
  }
  const obj = document.querySelector("meta[name=csrf-token]");
  const result = obj == null ? "" : obj.getAttribute("content");
  return result == null ? "" : result;
};

const AXIOS = Axios.default.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-Token": create_csrf_token(),
    "X-Requested-With": "XMLHttpRequest",
  },
  validateStatus(status) {
    return status < 500;
  },
});

AXIOS.interceptors.response.use(
  async (response) => {
    if (response.status !== 401) {
      return response;
    }
    let token: string | null = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem(Token.REFRESH);
    }
    if (token === null || token === "") {
      return response;
    }
    return AXIOS.post(ApiUri.OAUTH.ACCESS_TOKEN, {
      refresh_token: token,
      client_id: String(1),
      client_secret: String("dit7Doj9EWP8hYgPtsy7Kivfz1TI5MjaJxvcGh8N"),
      grant_type: "refresh_token",
      scope: "",
    })
      .then((responseLogin) => {
        if (responseLogin.status === 401 || responseLogin.status === 400) {
          if (typeof window !== "undefined") {
            if (
              response.config.headers.Authorization !==
              `Bearer ${localStorage.getItem(Token.ACCESS)}`
            ) {
              response.config.headers.Authorization = `Bearer ${localStorage.getItem(
                Token.ACCESS
              )}`;
              return AXIOS(response.config);
            }
          }
          return response;
        }
        if (typeof window !== "undefined") {
          localStorage.setItem(Token.ACCESS, responseLogin.data.access_token);
          localStorage.setItem(Token.REFRESH, responseLogin.data.refresh_token);
        }
        response.config.headers.Authorization = `Bearer ${responseLogin.data.access_token}`;
        return AXIOS(response.config);
      })
      .catch((_) => {
        return response;
      });
  },
  (error) => {
    return Promise.reject(error);
  }
);

AXIOS.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      Token.ACCESS
    )}`;
    config.headers.AuthorizationSub = `Bearer ${localStorage.getItem(
      Token.ACCESS
    )}`;
  }
  return config;
});

export class ApiConnection {
  // getリクエスト
  async get(url: string, json: any) {
    json.csrfToken = create_csrf_token();
    return AXIOS.get(url, { params: json });
  }
  // postリクエスト
  async post(url: string, json: any) {
    json.csrfToken = create_csrf_token();
    return AXIOS.post(url, json);
  }
  // putリクエスト
  async put(url: string, json: any) {
    json.csrfToken = create_csrf_token();
    return AXIOS.put(url, json);
  }
  // deleteリクエスト
  async delete(url: string, json: any) {
    json.csrfToken = create_csrf_token();
    return AXIOS.delete(url, json);
  }

  async post_file(url: string, params: FormData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return AXIOS.post(url, params, config);
  }

  async put_file(url: string, params: FormData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return AXIOS.put(url, params, config);
  }
}
