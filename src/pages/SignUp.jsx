import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import CommonBtn from "../components/CommonBtn";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입에 성공했습니다!");
      navigate("/log-in");
    } catch (error) {
      // alert("회원가입에 실패했습니다. 다시 시도해주세요");
      alert("이미 존재하는 ID입니다. 다른 ID를 입력해주세요");
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <div>
        <h1 className="text-3xl font-bold text-primary-color mb-6 flex justify-center items-center">
          회원가입
        </h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
      </div>
      <p>
        이미 계정이 있으신가요?
        <Link className="text-red-400" to="/log-in">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default Signup;
