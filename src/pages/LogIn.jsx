import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { loginTest } = useContext(AuthContext);
  const handleLogin = async (formData) => {
    try {
      await login(formData);
      alert("로그인에 성공했습니다!");
      loginTest();
      // 이제 ㄱㄱ
      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요!");
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <div>
        <h1 className="text-3xl font-bold text-primary-color mb-6 flex justify-center items-center">
          로그인
        </h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
      </div>
      <p>
        계정이 없으신가요?
        <Link className="text-red-400" to="/sign-up">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
