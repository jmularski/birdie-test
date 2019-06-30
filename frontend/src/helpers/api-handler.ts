import axios, { AxiosRequestConfig } from "axios";

interface Headers {
  "Content-Type": string;
  Authorization?: string;
}

interface Options {
  url: string;
  method: AxiosRequestConfig["method"];
  authHeader?: string;
  data?: object;
}

export const request = async (options: Options) => {
  const BASE_URL = "http://localhost:3000";

  const headers: Headers = {
    "Content-Type": "application/json"
  };

  if (options.authHeader) {
    headers.Authorization = `JWT ${options.authHeader}`;
  }

  const client = axios.create({
    baseURL: BASE_URL,
    headers
  });

  const clientOptions: AxiosRequestConfig = {
    url: options.url,
    method: options.method,
    data: options.data
  };

  return client(clientOptions);
};
