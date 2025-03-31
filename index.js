const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/db');

mongoose.set('strictQuery', true); //쿼리 오류방지 
require('dotenv').config(); //env 불러오기

connectDB(); //DB연결

app.use(express.json());


//기본 라우트
app.get('/', (req,res) => {
    res.send('todo api 서버 실행중');
})

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행중입니다.`);
})