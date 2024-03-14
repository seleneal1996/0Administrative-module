import axios from "axios";
import CONSTANTS from "./constants";

const { REACT_APP_API } = CONSTANTS.API;
export const axiosDefault = axios.create({});

axiosDefault.interceptors.request.use(
  async function (config) {
    config.headers["Content-Type"] = "application/json";
    config.baseURL = `${REACT_APP_API}/api`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosDefault.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    return Promise.reject(error?.message);
  }
);
