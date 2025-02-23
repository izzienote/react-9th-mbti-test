import React from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../components/CommonBtn";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const { user } = useAuthStore((state) => state);
  return (
    <div>
      <h1 className="text-5xl font-bold text-primary-color mb-6">
        무료 성격 테스트
      </h1>
      <p className="mb-8 text-lg text-secondary-color">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link to={user ? "/test-page" : "/log-in"}>
        <CommonBtn>내 성격 알아보러 가기</CommonBtn>
      </Link>
    </div>
  );
};

export default Home;
