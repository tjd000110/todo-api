const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

//회원가입 라우트
router.post('/register', registerUser);

module.exports = router;