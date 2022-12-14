import { ApiRequestConfig } from "../type/api-type";
import { serverApi } from "./api";

const MAIN_URL = "/genre";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const { USER_NAME, USER_CODE, USER_STATUS } = API_DATA_MAPPING;

// export interface IAreaRequestBody {
//   [USER_NAME]: string;
//   [USER_CODE]: string;
//   [USER_STATUS]?: number;
// }

export const getGenreTV = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/tv/list?api_key=${API_KEY}&language=en-US`, config)
    .then((res) => res.data);

export const getGenreMovie = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/movie/list?api_key=${API_KEY}&language=en-US`, config)
    .then((res) => res.data);

// {https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US}
