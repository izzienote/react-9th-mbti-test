import AuthForm from "../components/AuthForm";
import { updateProfile, getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { updateTestResult } from "../api/testResults";
import { useMutation } from "@tanstack/react-query";

const Profile = () => {
  const { accessToken, user, setUser } = useAuthStore((state) => state);

  //--------------디비를 수정하는 뮤테이트--------------//
  const updateNicknameTestResultMutation = useMutation({
    mutationFn: updateTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
    },
  });

  //프로필 닉네임 수정 로직
  const handleUpdateProfile = async (formData) => {
    if (accessToken) {
      try {
        //폼데이터와, accssToken 전달
        await updateProfile({ ...formData, accessToken });
        alert("프로필 정보 변경 성공");
        //변경 후, 다시 유저 정보를 불러오기
        const updatedUser = await getUserProfile(accessToken);
        // console.log("updatedUser=>", updatedUser);
        //불러온 유저 정보를 setUser에 닉네임만 변경해주기
        await setUser({ ...user, nickname: updatedUser.nickname });

        // console.log(formData);

        updateNicknameTestResultMutation.mutate({
          id: user.userId,
          updateNickname: formData.nickname,
        });
      } catch (error) {
        alert("프로필 정보 변경 실패");
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <div>
        <h1 className="text-3xl font-bold text-primary-color mb-6 flex justify-center items-center">
          프로필
        </h1>
        <p className="text-center">변경할 닉네임을 입력해주세요!</p>
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} />
      </div>
    </div>
  );
};

export default Profile;
