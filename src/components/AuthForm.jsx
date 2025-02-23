import { useState } from "react";
import CommonBtn from "./CommonBtn";

const AuthForm = ({ mode, onSubmit }) => {
  const signupForm = { id: "", password: "", nickname: "" };
  const loginForm = { id: "", password: "" };
  const profileForm = { nickname: "" };

  const [formData, setFormData] = useState(
    mode === "login" ? loginForm : mode === "signup" ? signupForm : profileForm
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    //프로필 모드일때만, 입력 값 초기화
    if (mode === "profile") {
      setFormData({ nickname: "" });
    }
  };

  return (
    <form
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      {mode !== "profile" && (
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      {mode !== "profile" && (
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      {mode !== "login" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <CommonBtn type="submit">
        {mode === "login"
          ? "로그인"
          : mode === "signup"
          ? "회원가입"
          : "프로필 업데이트"}
      </CommonBtn>
    </form>
  );
};

export default AuthForm;
