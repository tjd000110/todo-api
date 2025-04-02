const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', ''); // Authorization 헤더에서 토큰 가져오기

    if(!token) {
        return res.status(401).json({ message: '인증 토큰이 없습니다. '});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //토큰 유효성 검증
        req.user = decoded; //토큰에서 사용자 정보 추출
        next(); 
    } catch(err) {
        res.status(401).json({ message: '토큰이 유효하지 않습니다. '});
    }
}

module.exports = authenticate;