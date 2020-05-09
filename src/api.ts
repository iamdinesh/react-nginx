import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000 // If request takes longer than 10s, it will be aborted.
});

export default request;
