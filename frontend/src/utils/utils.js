import axios from "axios";

const Backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST_PROD,
  withCredentials: true,
});

export { Backend };
