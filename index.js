const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/db'); //DB 분리 
const authRoutes = require('./routes/auth'); //auth 라우트 추가

require('dotenv').config(); //env 불러오기

mongoose.set('strictQuery', true); //쿼리 오류방지 

connectDB(); //DB연결

app.use(express.json()); //JSON 형태로 데이터 받기

app.use('/auth', authRoutes); //auth 경로로 오는 요청은 authRoutes로 처리

//기본 라우트
app.get('/', (req,res) => {
    res.send('todo api 서버 실행중');
})

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행중입니다.`);
})