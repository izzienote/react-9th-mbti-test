import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../zustand/authStore";
//login 이름이 겹쳐서 이름 바꿔줌
import { login as loginApi } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore((state) => state);

  const handleLogin = async (formData) => {
    try {
      const response = await loginApi(formData);
      const { accessToken } = response;
      login(accessToken);
      //왜 로컬스토리지에 전체 상태가 저장이 되는 걸까... 왜 이 코드를 입력해야만하지?
      localStorage.setItem("accessToken", accessToken);

      alert("로그인에 성공했습니다!");
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
