import { create } from "zustand";
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware";

const useAuthStore = create(persist(immer((set) => ({
  //로그인 여부 관리 상태 ->유저 전체 정보를 저장하는듯?
  // isAuthenticated: false,
  user: null,
  //토근 관리 상태
  token: null,
  //로그인 
  login: (token) => set((state) => {
    // state.isAuthenticated = true;
    state.user = true;
    state.token = token;
  }),
  //로그아웃
  logout: () => set((state) => {
    // state.isAuthenticated = false;
    state.user = false;
    state.token = null;
  }),
})), {
  name: "user",
  //값이 전체 state가 저장되어서 찾아보니 select로 특정값만 저장가능?
  //근데 이걸 하나마나 똑같이 전체 상태가 저장되는데?...ㅠㅠ
  // select: (state) => ({ token: state.token }),
  //그럼 user 정보를 저장해볼까?
}))

export default useAuthStore;