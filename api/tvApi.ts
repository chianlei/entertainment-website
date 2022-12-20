import { ApiRequestConfig } from "../type/api-type";
import { serverApi } from "./api";

const MAIN_URL = "/tv";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getPopularTv = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`, config)
    .then((res) => res.data);

export const getAiringTodayTv = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(
      `${MAIN_URL}/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
      config
    )
    .then((res) => res.data);

export const getOnAirTv = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(
      `${MAIN_URL}/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
      config
    )
    .then((res) => res.data);

export const getTopRatedTv = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(
      `${MAIN_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      config
    )
    .then((res) => res.data);
