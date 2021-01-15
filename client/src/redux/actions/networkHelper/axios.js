import axios from "axios";
import env from "../../../env.json";

const instance = axios.create({
  baseURL: env.BASE_URL,
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("notesToken");
      return error.response;
    }
    return error.response;
  }
);

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("notesToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
