const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//회원가입 API 로직 작성

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        //이미 가입된 이메일인지 확인
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: '이미 가입된 이메일입니다.' });
        }

        //새 유저 생성
        const user = new User({ email, password });
        await user.save();

        //응답
        res.status(201).json({ message: '회원가입 성공! '});
    } catch(err) {
        res.status(500).json({ message: '서버 에러 발생!'});
    }
}

module.exports = { registerUser };