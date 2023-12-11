import axios from "axios";

const Backend = axios.create({
  baseURL: 'http://127.0.0.1:3001', // Switch to env variable later
  withCredentials: true,
});

export { Backend };
