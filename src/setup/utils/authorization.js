export const getTokenFromLocalstorage = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const getAuthorizationTokenHeader = () => {
  const token = getTokenFromLocalstorage();
  if (token) {
    return { authorization: `Bearer ${token}` };
  }
  return {};
};

export const removeAuthorization = () => {
  localStorage.removeItem("token");
};
