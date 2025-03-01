import { jsonAPI } from './authInstance';
//테스트 결과 가져오기
export const getTestResults = async () => {

  try {
    const response = await jsonAPI.get('/testResults')
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//테스트 결과 추가
export const createTestResult = async (resultData) => {
  try {
    const response = await jsonAPI.post('/testResults', resultData)
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
  }

};
//테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const response = await jsonAPI.delete(`/testResults/${id}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//테스트 비공개, 공개 전환
export const updateTestResultVisibility = async ({ id, visibility }) => {
  try {
    const response = await jsonAPI.patch(`/testResults/${id}`, { visibility: !visibility })
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//닉네임 업데이트시, 반영하는 1개 더 필요!
export const updateTestResult = async ({ id, updateNickname }) => {
  console.log(updateNickname);
  console.log(id);
  try {
    const response = await jsonAPI.patch(`/testResults/${id}`, { nickname: updateNickname })
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}