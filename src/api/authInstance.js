import axios from "axios";

const authAPI = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
})

const jsonAPI = axios.create({
  baseURL: import.meta.env.VITE_TEST_RESULT_URL,
})

export { authAPI, jsonAPI };