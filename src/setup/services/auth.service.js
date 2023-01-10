import { postRequest, postRequestWithoutToken } from "../utils/useApi";

export const login = async (username, password) => {
  try {
    const data = { username, password };
    const response = await postRequestWithoutToken("/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email, password, username, team, avatar) => {
  try {
    const data = { email, password, username, team, avatar };
    const response = await postRequest("/auth/register", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
