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
        res.status(201).json({ message: '회원가입 완료' });
    } catch(err) {
        res.status(500).json({ message: '서버 오류가 발생하였습니다.' });
    }
}

//로그인 API 로직 작성

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // email로 사용자 찾기
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message : '존재하지 않는 이메일입니다.' });
        

        //비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });

        //jwt 토큰 발급
        const token = jwt.sign(
            { userId: user._id }, //토큰에 사용자 ID 포함
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } //토큰 만료시간 1
        );

        //JWT토큰 쿠키에 저장
        res.cookie('token', token, {
            httpOnly: true,         //자바스크립트에서 쿠키에 접근할수 없도록 설정
            secure: process.env.NODE_ENV === 'production',      //https 환경에서만 적용
            sameSite: 'Strict',         //SameSite 쿠키 설정(크로스사이트 요청 차단)
            expires: new Date(Date.now() + 360000),     //쿠키 만료시간(1h)
        })

        //응답
        res.status(200).json({ message: '로그인 완료', token });

    } catch (error) {
        res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
};




module.exports = { registerUser, loginUser };