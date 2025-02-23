import AuthForm from "../components/AuthForm";
import { updateProfile, getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
  const { accessToken, user, setUser } = useAuthStore((state) => state);
  console.log(accessToken);

  const handleUpdateProfile = async (formData) => {
    if (accessToken) {
      try {
        //폼데이터와, accssToken 전달
        await updateProfile({ ...formData, accessToken });
        alert("프로필 정보 변경 성공");
        //변경 후, 다시 유저 정보를 불러오기
        const updatedUser = await getUserProfile(accessToken);
        console.log("updatedUser=>", updatedUser);
        //불러온 유저 정보를 setUser에 닉네임만 변경해주기
        await setUser({ ...user, nickname: updatedUser.nickname });
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
        <p className="text-center">수정하고 싶은 닉네임을 입력해주세요!</p>
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} />
      </div>
    </div>
  );
};

export default Profile;
