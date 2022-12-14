import { ApiRequestConfig } from "../type/api-type";
import { serverApi } from "./api";

const MAIN_URL = "/trending";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getMovieTrending = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/movie/day?api_key=${API_KEY}`, config)
    .then((res) => res.data);

export const getTvTrending = (config: ApiRequestConfig = {}) =>
  serverApi
    .get(`${MAIN_URL}/tv/day?api_key=${API_KEY}`, config)
    .then((res) => res.data);

// {https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>}
