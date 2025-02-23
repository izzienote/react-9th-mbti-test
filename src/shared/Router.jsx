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
import useAuthStore from "../zustand/authStore";

const Router = () => {
  const user = useAuthStore((state) => state.user);

  const PublicRoute = ({ element }) => {
    return !user ? element : <Navigate to="/" />;
    return element;
  };

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/log-in" />;
    return element;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 사용자가 임의로 페이지 들어가고자 할때 로그인 페이지로 이동 */}
          <Route path="*" element={<Navigate to="/log-in" />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-up"
            element={<PublicRoute element={<SignUp />} />}
          />
          <Route path="/log-in" element={<PublicRoute element={<LogIn />} />} />
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
