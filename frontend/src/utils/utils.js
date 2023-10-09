import axios from "axios";

const Backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST_PROD, // Switch to env variable later
  withCredentials: true,
});

export { Backend };
