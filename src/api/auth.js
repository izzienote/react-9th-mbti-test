import { authAPI } from "./authInstance";

export const register = async (userData) => {
  const response = await authAPI.post("/register", userData);
  return response.data;
}

export const login = async (userData) => {
  const response = await authAPI.post("/login", userData);
  return response.data;
};

//프로필 닉네임 수정은 및 유저 정보 교체 작업
//vercel branch 변경
export const getUserProfile = async (accessToken) => {
  const response = await authAPI.get("/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};

//인자를 토큰과 닉네임을 받고, 토큰과 변경되는 닉네임을 전달해서 프로필 업데이트 하기
export const updateProfile = async ({ nickname, accessToken }) => {
  const response = await authAPI.patch("/profile", { nickname }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};
