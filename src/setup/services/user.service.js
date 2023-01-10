import { getRequest } from "../utils/useApi";

export const getSingleUser = async (id) => {
  try {
    const response = await getRequest("/user/" + id);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
