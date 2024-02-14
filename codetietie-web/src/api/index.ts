import axios, { type AxiosResponse } from 'axios';
import { baseURL, timeout } from './config';

const baseurl: string =
  import.meta.env.MODE == 'development' ? baseURL.dev : baseURL.pro;
const instance = axios.create({
  baseURL: baseurl,
  timeout,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) return response;

    throw new Error(response.status.toString());
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
