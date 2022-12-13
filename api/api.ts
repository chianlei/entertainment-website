import axios, { AxiosInstance } from "axios";
import { ApiRequestConfig } from "../api/api-type";

export const localAxiosParams = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

export const serverAxiosParams = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

// Create axios instance with default params
const localAxiosInstance = axios.create(localAxiosParams);
const severAxiosInstance = axios.create(serverAxiosParams);

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

export const localApi = api(localAxiosInstance);
export const serverApi = api(severAxiosInstance);
