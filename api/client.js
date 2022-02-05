import axios from "axios";
import store from "../utils/store";
const client = axios.create({
  baseURL: "http://localhost:9001/api/v1",
  headers: {
    "x-access-token": store.getAccessToken(),
    "x-refresh-token": store.getRefreshToken(),
  },
});

export default client;
