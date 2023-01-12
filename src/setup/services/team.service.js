import { getRequest } from "../utils/useApi";

export const getTeams = async () => {
  try {
    const response = await getRequest(`/team`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
