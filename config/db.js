const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedToPology: true
        });
        console.log('MongoDB 연결 성공');
    }catch (err) {
        console.log('MongoDB 연결 실패:',err);
        process.exit(1); //연결 실패시 프로세스 종료료
    }
}

module.exports = connectDB;