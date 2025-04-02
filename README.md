# To-do API

Node.js + Express + MongoDB 기반의 간단한 투두 리스트 백엔드 API입니다.  
JWT 인증을 통해 사용자별 할 일 관리를 할 수 있도록 설계되었습니다.

---

## 🚀 사용 기술 스택

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- Postman (API 테스트용)

---

## 🛠️ 실행 방법

1. 프로젝트 클론

git clone https://github.com/yourusername/todo-api.git


2. npm install

3. 환경변수 설정 .env파일 생성 후 아래 내용 입력

PORT=3000<br>
MONGO_URI=your_mongo_uri<br>
JWT_SECRET=your_secret_key

4. 개발서버 실행

npm run dev

#############################################################

📬 주요 API 예시

(이후 기능 개발에 따라 업데이트 예정)

🔐 회원가입

POST /auth/register


🔐 로그인

POST /auth/login


📋 To-do 목록 조회

GET /todos


➕ To-do 추가

POST /todos


✅ To-do 완료 처리

PUT /todos/:id


❌ To-do 삭제

DELETE /todos/:id


🌍 배포 링크

🚧 아직 배포 전입니다. Render 또는 Railway를 통해 배포 예정입니다.

👨‍💻 만든 사람
GitHub https://github.com/tjd000110

