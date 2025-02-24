import TestForm from "../components/TestForm";
import { useState } from "react";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import CommonBtn from "../components/CommonBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../zustand/authStore";

//한국 시간으로 변환하기!
const offset = 1000 * 60 * 60 * 9;
const koreaNow = new Date(new Date().getTime() + offset);

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const user = useAuthStore((state) => state.user);

  //유즈쿼리클라이언트 가져오기
  const queryClient = useQueryClient();

  //mutation으로 새로운 데이터 넣기
  const addTestResultMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
    },
  });

  //테스트 폼 핸들러
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult); //결과화면 나오는 로직(브라우저 에서만)
    // console.log("결과 타입값만 반환 ==>", mbtiResult);

    //뮤테이트로 값 json 서버에 값 추가
    addTestResultMutation.mutate({
      nickname: user.nickname,
      result: mbtiDescriptions[mbtiResult],
      visibility: true,
      // date: new Date(),
      date: koreaNow,
      writerId: user.userId,
    });
    //콘솔로그로 확인
    // console.log({
    //   nickname: user.nickname,
    //   result: mbtiDescriptions[mbtiResult],
    //   visibility: true,
    //   date: new Date(),
    //   writerId: user.userId,
    // });
  };

  const handleNavigateToResults = () => {
    // console.log("Navigating to /test-result-page");
    navigate("/test-result-page");
  };

  return (
    <div className="py-10 w-full flex flex-col items-center justify-center bg-white h-screen overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              type="button"
              onClick={handleNavigateToResults}
              className="w-full bg-red-400 text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F] hover:bg-red-100"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
