import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import { QUERY_KEY } from "../constants";

export const useTestResults = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MBTI],
    queryFn: getTestResults,
    retry: 1,
  })
}

export const useUpdateVisibility = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
      toast.success("전환되었습니다!");
    },
  });

}
