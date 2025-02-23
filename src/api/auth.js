import axios from "axios";;

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
}

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

//프로필 닉네임 수정은 오케이 but 변경된 유저의 정보로 갈아끼우는 작업 필요
//그래서 getUserProfile을 쓰는 듯
export const getUserProfile = async (accessToken) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};

//인자를 토큰과 닉네임을 받고, 토큰과 변경되는 닉네임을 전달해서 프로필 업데이트 하기
export const updateProfile = async ({ nickname, accessToken }) => {
  const response = await axios.patch(`${API_URL}/profile`, { nickname }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};
