import { ApiRequestConfig } from "./api-type";
import { localApi } from "./api";

// const MAIN_URL = "/genre";
// const { USER_NAME, USER_CODE, USER_STATUS } = API_DATA_MAPPING;

// export interface IAreaRequestBody {
//   [USER_NAME]: string;
//   [USER_CODE]: string;
//   [USER_STATUS]?: number;
// }

export const getGenreTV = (config: ApiRequestConfig = {}) =>
  localApi
    .get(`genre/tv/list?api_key=84a361a36a2058bce5d33030efd62edf`, config)
    .then((res) => res.data);
