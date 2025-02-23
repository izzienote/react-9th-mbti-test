import React, { useContext } from "react";
import AuthForm from "../components/AuthForm";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
  const { user } = useAuthStore((state) => state);

  const handleUpdateProfile = async () => {
    if (token) {
      try {
        await getUserProfile(token);
        alert("토큰으로 유저정보 가져오기");
      } catch (error) {
        alert("토큰 실패");
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
