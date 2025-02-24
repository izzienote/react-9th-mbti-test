import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getTestResults,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import CommonBtn from "../components/CommonBtn";
import { QUERY_KEY } from "../constants";
import useAuthStore from "../zustand/authStore";
import { jsonAPI } from "../api/authInstance";

const TestResultPage = () => {
  //user 정보 가져오기
  const user = useAuthStore((state) => state.user);
  //쿼리클라이언트 가져오기
  const queryClient = useQueryClient();

  //탠스택쿼리 사용
  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEY.MBTI],
    queryFn: getTestResults,
    retry: 1,
  });

  //뮤테이션으로 비공개 공개 전환하기 ---- 이 부분이 지금 문제
  const updateVisibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
    },
  });

  //뮤테이션으로 결과 삭제하기
  const deleteTestResultMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
    },
  });

  if (isPending) {
    return <div>로딩중입니다</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다</div>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-primary-color mb-10">
        MBTI 테스트 결과 페이지
      </h1>
      <section className="flex flex-col gap-y-5">
        {testResults.map((data) => (
          <section
            className="rounded-xl max-w-2xl  bg-gray-900 px-10 py-3 text-white "
            key={data.id}
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-yellow-600">{data.nickname}</span>
              <span>작성 시간 : {data.date}</span>
            </div>
            <div>{data.result}</div>
            <div>
              {user.userId === data.writerId && (
                <>
                  <button
                    onClick={() =>
                      updateVisibilityMutation.mutate({
                        id: data.id,
                        visibility: data.visibility,
                      })
                    }
                    className=" text-white px-2 py-1 bg-blue-600 hover:bg-blue-800 rounded-lg transition-colors "
                  >
                    {data.visibility ? "비공개로 전환" : "공개로 전환"}
                  </button>
                  <button
                    onClick={() => deleteTestResultMutation.mutate(data.id)}
                    className=" text-white px-2 py-1 bg-red-800 hover:bg-red-500 rounded-lg transition-colors "
                  >
                    삭제
                  </button>
                </>
              )}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default TestResultPage;
