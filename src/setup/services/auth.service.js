import { postRequest, postRequestWithoutToken } from "../utils/useApi";

export const login = async (data) => {
  try {
    const response = await postRequestWithoutToken("/auth/login", data);
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async (data) => {
  try {
    const response = await postRequest("/auth/signup", data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
