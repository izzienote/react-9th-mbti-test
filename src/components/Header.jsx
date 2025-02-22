import React, { useContext } from "react";
import CommonBtn from "./CommonBtn";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("header:", isAuthenticated);
  return (
    <header className="flex justify-center items-center py-4">
      <nav>
        <ul className="flex space-x-6 ">
          <li>
            <Link to="/">홈</Link>
          </li>
          {/* 로그인 상태일 경우, 버튼 안보이게 수정 필요 */}
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile">프로필</Link>
              </li>
              <li>
                <Link to="/test-page">테스트</Link>
              </li>
              <li>
                <Link to="/test-result-page">결과보기</Link>
              </li>
            </>
          ) : null}

          <li>
            <Link className="text-red-400" to="/log-in">
              <button className="w-20 text-white py-3 bg-red-400 hover:bg-red-100 rounded-lg transition-colors">
                로그인
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
