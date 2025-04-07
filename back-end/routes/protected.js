const express = require('express');
const authenticate = require('../middlewares/authenticate');
const router = express.router();

router.get('/protected', authenticate, (req, res) => {
    res.status(200).json({ message : '인증된 사용자만 접근 가능합니다.' });
});

module.exports = router;