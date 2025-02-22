import axios from "axios";;

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
}

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  // accessToken을 localStorage에 저장
  localStorage.setItem("accessToken", response.data.accessToken);
  console.log(response.data);
  return response.data;
};

//인터셉터?!를 짜야함!
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData);
  return response.data;
};
