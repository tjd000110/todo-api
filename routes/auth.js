const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

//회원가입 라우트
router.post('/register', registerUser);

//로그인 라우트
router.post('/login', loginUser);

//로그아웃 라우트
router.post('/logout', (req, res) => {
    res.clearCookie('token'); //쿠키에서 토큰 삭제
    res.status(200).json({ message: '로그아웃 되었습니다.' });
});

module.exports = router;