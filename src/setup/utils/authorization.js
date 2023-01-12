
export const getTokenFromLocalstorage = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const verifyToken = async () => {
  const token = getTokenFromLocalstorage();
  try{
    // const auth = await getAuth();
    // const tokenVerification = await auth().verifyIdToken(token);
    // return tokenVerification;
  }catch(error){
    console.log(error.message);
  }
}

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
