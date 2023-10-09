import axios from "axios";

const Backend = axios.create({
  baseURL: 'http://localhost:3001', // Switch to env variable later
  withCredentials: true,
});

export { Backend };
