import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import {
  QUERY_KEY,
  DATE_SLICE_START,
  DATE_SLICE_END,
  TIME_SLICE_START,
  TIME_SLICE_END,
} from "../constants";
import useAuthStore from "../zustand/authStore";
import { toast } from "react-toastify";
import { useTestResults } from "../hooks/queries";

const TestResultPage = () => {
  //user 정보 가져오기
  const user = useAuthStore((state) => state.user);
  //쿼리클라이언트 가져오기
  const queryClient = useQueryClient();

  //탠스택쿼리 사용
  const { data: testResults, isPending, isError } = useTestResults();

  //뮤테이션으로 비공개 공개 전환하기
  const updateVisibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
      toast.success("전환되었습니다!");
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

  const handleDeleteResult = (id) => {
    const result = window.confirm("정말 삭제하시겠습니까?");
    if (!result) return;
    deleteTestResultMutation.mutate(id);
  };

  //visiblity 속성이 true 인 것만, 보이게 필터링!
  //만약 writerId === user.userId가 같을때는 전부 다 보여주도록 하기!

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-primary-color mb-10">
        MBTI 테스트 결과 페이지
      </h1>
      <section className="flex flex-col gap-y-5">
        {testResults.map((data) => {
          if (user.userId === data.writerId || data.visibility) {
            return (
              <section
                className="rounded-xl max-w-2xl  bg-gray-900 px-10 py-3 text-white "
                key={data.id}
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="text-yellow-600">{data.nickname}</span>
                  <span>
                    테스트 진행 날짜 :{" "}
                    {data.date.slice((DATE_SLICE_START, DATE_SLICE_END))}
                  </span>
                  <span>
                    {data.date.slice(TIME_SLICE_START, TIME_SLICE_END)}
                  </span>
                </div>
                <div>{data.result}</div>
                <div className="flex justify-end items-center gap-3">
                  {user.userId === data.writerId && (
                    <>
                      <button
                        onClick={() =>
                          updateVisibilityMutation.mutate({
                            id: data.id,
                            visibility: data.visibility,
                          })
                        }
                        className=" text-white px-2 py-1 bg-blue-600 hover:bg-blue-800 rounded-lg transition-colors"
                      >
                        {data.visibility ? "비공개로 전환" : "공개로 전환"}
                      </button>
                      <button
                        onClick={() => handleDeleteResult(data.id)}
                        className=" text-white px-2 py-1 bg-red-800 hover:bg-red-500 rounded-lg transition-colors "
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              </section>
            );
          }
        })}
      </section>
    </div>
  );
};

export default TestResultPage;
