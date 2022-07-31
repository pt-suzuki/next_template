import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { convertToCamelCase, convertToSnakeCase } from '~/helpers/string_converter';
import { environments } from '~/config/environments';

const axiosClient = axios.create({
  baseURL: environments.frontRootUrl,
  /*paramsSerializer(params) {
    return qs.stringify(convertToSnakeCase(params));
  },
  */
  validateStatus(status) {
    return status < 500;
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
  };
  //config.data = convertToSnakeCase(config.data);
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      location.href = `/`;
      return response;
    }
    //response.data = convertToCamelCase(response.data);
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 500: {
        const query = error.response.data.code
          ? `?error=${encodeURIComponent(error.response.data.code)}`
          : '';
        location.href = `/500${query}`;
        break;
      }
      case 503:
        return error.response;
    }
    return Promise.reject(error);
  },
);
export class HttpClient {
  public get(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.get(url, { params: params });
  }
  public post(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.post(url, params);
  }
  public put(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.put(url, params);
  }
  public delete(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.delete(url, { data: params });
  }
}
