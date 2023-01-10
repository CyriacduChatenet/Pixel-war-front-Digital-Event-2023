import { getTokenFromLocalstorage } from "../../setup/utils/authorization";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = getTokenFromLocalstorage();
  if (!token) {
    return <Navigate to="/connexion" />;
  }

  const decoded = jwt_decode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  if (decoded.exp < currentTime) {
    localStorage.removeItem("token");
    return <Navigate to="/connexion" />;
  }

  return children;
};

export default ProtectedRoute;
