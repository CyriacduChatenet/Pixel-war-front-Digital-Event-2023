import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContextProvider from "../../setup/contexts/UserContext";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoutes";

const Layout = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default Layout;
