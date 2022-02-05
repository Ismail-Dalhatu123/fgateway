const localStorage = {
  getItem: () => {},
  setItem: () => {},
  removeItem: () => {},
};

const getItem = (key) => localStorage?.getItem(key) || null;
const setItem = (key, value) => {
  localStorage?.setItem(key, value);
};
const removeItem = (key) => localStorage?.removeItem(key);

const accessTokenKey = "accessToken";
const refreshTokenKey = "refreshToken";

const getAccessToken = () => getItem(accessTokenKey);
const getRefreshToken = () => getItem(refreshTokenKey);
const setAccessToken = (token) => setItem(accessTokenKey, token);
const setRefreshToken = (token) => setItem(refreshTokenKey, token);
const removeToken = () => {
  removeItem(accessTokenKey);
  removeItem(refreshTokenKey);
};

const store = {
  getItem,
  setItem,
  removeItem,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  removeToken,
};
export default store;
