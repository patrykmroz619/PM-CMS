import axios from "axios";

import apiConfig from "../config";
import { getActiveToken } from "@utils/token";
import { refreshActiveToken } from "@api/auth";

const apiWithTokenHandling = axios.create(apiConfig);

apiWithTokenHandling.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getActiveToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiWithTokenHandling.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    const { status, data } = error.response;

    if (status === 401 && data.error.type === "INVALID_ACTIVE_TOKEN" && !originalRequest.retry) {
      originalRequest.retry = true;
      const newActiveToken = await refreshActiveToken();

      if (newActiveToken) {
        originalRequest.headers.Authorization = "Bearer " + newActiveToken;
        return apiWithTokenHandling(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default apiWithTokenHandling;
