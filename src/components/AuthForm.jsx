import React, { useState } from "react";
import CommonBtn from "./CommonBtn";
import { register, login } from "../api/auth";

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  // 무엇을 formData 에 넣어야 할까요?
  // -> 로그인과 회원가입 폼을 2개로 나눔, 닉네임 여부
  // -> 프로필페이지에 닉네임 필요해서 폼 3개로 수정
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
    // mode === "login" ? login(formData) : register(formData);
    onSubmit(formData);
  };

  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다!
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
