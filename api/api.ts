import axios, { AxiosInstance } from "axios";
import { ApiRequestConfig } from "../type/api-type";
import { BASE_URL } from "../utils/constant";

// export const localAxiosParams = {
//   baseURL: process.env.REACT_APP_BASE_URL,
// };

export const serverAxiosParams = {
  baseURL: BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  // },
};

// Create axios instance with default params
// const localAxiosInstance = axios.create(localAxiosParams);
const serverAxiosInstance = axios.create(serverAxiosParams);

type TMethod = "get" | "post" | "put" | "delete" | "patch" | "head" | "options";
async function httpRequest(
  method: TMethod,
  url: string,
  config?: ApiRequestConfig
) {
  const res = await axios[method](url, config);
  return res.data;
}

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: ApiRequestConfig = {}) => axios.get(url, config),
    delete: (url: string, config: ApiRequestConfig = {}) =>
      axios.delete(url, config),
    post: (url: string, body: unknown, config: ApiRequestConfig = {}) =>
      axios.post(url, body, config),
    put: (url: string, body: unknown, config: ApiRequestConfig = {}) =>
      axios.put(url, body, config),
    patch: (url: string, body: unknown, config: ApiRequestConfig = {}) =>
      axios.patch(url, body, config),
  };
};

// export const localApi = api(localAxiosInstance);
export const serverApi = api(serverAxiosInstance);
