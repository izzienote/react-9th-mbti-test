import { create } from "zustand";
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware";

const useAuthStore = create(persist(immer((set) => ({
  //user 정보 및 토큰 저장
  user: null,
  accessToken: null,
  setUser: (user) => set({ user }),
  setToken: (accessToken) => set({ accessToken }),
  //로그아웃 시, 로컬스토리지에 있는 user 삭제
  logout: () => {
    set({ user: null, accessToken: null })
    localStorage.removeItem("user")
  }
  ,
})), {
  //user라는 이름으로 로컬스토리지에 저장(persist 기능)
  name: "user",
  getStorage: () => localStorage,
}))

export default useAuthStore;