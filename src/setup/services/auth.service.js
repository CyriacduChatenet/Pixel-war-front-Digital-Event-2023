import { postRequest, postRequestWithoutToken } from "../utils/useApi";

export const login = async (data) => {
  try {
    const response = await postRequestWithoutToken("/auth/login", data);
    localStorage.setItem("token", response.data.access_token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email, password, username, team) => {
  try {
    const data = { email, password, username, team };
    const response = await postRequest("/auth/signup", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
