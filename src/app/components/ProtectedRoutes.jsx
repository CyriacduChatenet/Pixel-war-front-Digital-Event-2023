import { getTokenFromLocalstorage, verifyToken } from "../../setup/utils/authorization";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useUserContext } from "../../setup/contexts/UserContext";
import { useEffect } from "react";
import { getSingleUser } from "../../setup/services/user.service";

const ProtectedRoute = ({ children }) => {
  const { setUser, user } = useUserContext();
  const token = getTokenFromLocalstorage();

  useEffect(() => {
    if (token && !user) {
      // const decoded = jwt_decode(token);
      // const id = decoded.uid;
      // getSingleUser(id).then((data) => {
      //   setUser(data);
      // });
    }
  }, [token, user, setUser]);

  if (!token) {
    return <Navigate to="/connexion" />;
  }

  // const decoded = jwt_decode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  // if (decoded.exp < currentTime) {
  //   localStorage.removeItem("token");
  //   return <Navigate to="/connexion" />;
  // }

  return children;
};

export default ProtectedRoute;
