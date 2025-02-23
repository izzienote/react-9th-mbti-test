import AuthForm from "../components/AuthForm";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
  const { accessToken } = useAuthStore((state) => state);
  console.log(accessToken);

  const handleUpdateProfile = async (formData) => {
    if (accessToken) {
      try {
        //폼데이터와, accssToken 전달
        await updateProfile({ ...formData, accessToken });
        alert("프로필 정보 변경 성공");
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
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} />
      </div>
    </div>
  );
};

export default Profile;
