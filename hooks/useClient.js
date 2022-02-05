import { useContext, useState } from "react";
import client from "../api/client";
import { RequestTypes, responseTypes } from "../api/request";
import urls from "../api/urls";
import AppContext from "../contexts/AppContext";
import store from "../utils/store";

function useClient() {
  const [isLoading, setIsLoading] = useState(false);
  const app_context = useContext(AppContext);
  const Request = async (type, ...args) => {
    const response = { error: null, data: null };
    if (!Object.values(RequestTypes).includes(type)) {
      response.error = { message: { message: "Invalid Request Type" } };
      return response;
    }
    try {
      setIsLoading(true);
      const res = await client[type](...args);
      if (res.data.type === responseTypes.error) {
        response.error = res.data;
        return response;
      }
      response.data = res.data;
      if (res.headers["x-access-token"] && res.headers["x-refresh-token"]) {
        store.setAccessToken(res.headers["x-access-token"]);
        store.setRefreshToken(res.headers["x-refresh-token"]);
        if (!store.getItem("isAccepted")) {
          app_context.setTokens({
            "x-access-token": res.headers["x-access-token"],
            "x-refresh-token": res.headers["x-refresh-token"],
          });
        }
      }
    } catch (error) {
      response["error"] = error?.response?.data;
    } finally {
      setIsLoading(false);
    }
    return response;
  };

  const get = (...args) => {
    return Request(RequestTypes.GET, ...args);
  };
  const post = (...args) => {
    return Request(RequestTypes.POST, ...args);
  };
  const put = (...args) => {
    return Request(RequestTypes.PUT, ...args);
  };
  const fdelete = (...args) => {
    return Request(RequestTypes.DELETE, ...args);
  };
  const patch = (...args) => {
    return Request(RequestTypes.PATCH, ...args);
  };

  const restoreUser = async () => {
    const accessToken = store.getAccessToken();
    if (!accessToken) return null;
    const res = await get(urls.me);
    if (res.error) return null;
    return res.data.data;
  };

  return {
    isLoading,
    restoreUser,
    get,
    post,
    put,
    fdelete,
    patch,
    Request,
  };
}

export default useClient;
