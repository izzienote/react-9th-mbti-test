# 📁 MBTI 테스트

![mbti](https://github.com/user-attachments/assets/71b261d4-6a19-4402-a339-3ebeba40f430)

# 🌑 구현 기능

✅ zustand를 활용한 user 상태 관리

✅ tanStack query를 활용하여 mbti 테스트 CRUD 관리

- Create: 새로운 MBTI 테스트 결과 저장
- Read: 사용자들이 작성한 모든 테스트 결과 보기
- Update: 내가 테스트한 결과의 비공개/ 공개 전환 여부 설정
- Delete: 나의 결과 삭제 기능

<br>

# 🌳 파일구조

```
📦react-9th-mbti-test
📂public
 ┃ ┣ 📜favicon-16x16.png
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜authInstance.js
 ┃ ┃ ┗ 📜testResults.js
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┣ 📜CommonBtn.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜TestForm.jsx
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜questions.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜queries.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜LogIn.jsx
 ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┣ 📜SignUp.jsx
 ┃ ┃ ┣ 📜TestPage.jsx
 ┃ ┃ ┗ 📜TestResultPage.jsx
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Router.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜mbtiCalculator.js
 ┃ ┣ 📂zustand
 ┃ ┃ ┗ 📜authStore.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜db.json
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```

# 🚀 트러블슈팅

[MBTI] [비공개/공개 전환 시, 전부 다 사라진다?](https://izzie-note.tistory.com/148)

[MBTI] [alert과 작별! toastify 라이브러리 적용하기](https://izzie-note.tistory.com/150)

<br>
