import { ApiRequestConfig } from "../type/api-type";
import { serverApi } from "./api";

//wait

const MAIN_URL = "/movie";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getPopularMv = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`, config)
    .then((res) => res.data);

