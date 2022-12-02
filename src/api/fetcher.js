import axios from "axios";

export const baseUrl = "http://localhost:3002/api";

//for get request
export const getFetcher = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err);

//for post request
export const postFetcher = (url, ...params) => {
  return axios
    .post(url, ...params)
    .then((res) => res.data)
    .catch((err) => err);
};

//fot put request
export const putFetcher = (url, ...params) =>
  axios
    .put(url, ...params)
    .then((res) => res.data)
    .catch((err) => err);
