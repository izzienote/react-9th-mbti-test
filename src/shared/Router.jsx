import React, { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "./Layout";
import { AuthContext } from "../context/AuthContext";

const Router = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const PublicRoute = ({ element }) => {
    return !isAuthenticated ? element : <Navigate to="/" />;
    return element;
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/log-in" />;
    return element;
  };

  return (
    <BrowserRouter>
      <Layout>
        {/* 로그인 안해도 볼 수 있는 사이트 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<PublicRoute element={<LogIn />} />} />
          <Route
            path="/sign-up"
            element={<PublicRoute element={<SignUp />} />}
          />
          {/* 로그인 해야 볼 수 있는 사이트 */}
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route
            path="/test-page"
            element={<PrivateRoute element={<TestPage />} />}
          />
          <Route
            path="/test-result-page"
            element={<PrivateRoute element={<TestResultPage />} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
