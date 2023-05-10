const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // 기본 응답 헤더는 text/html 
    // next()를 호출 하지 않음에도 더 이상 요청 실패가 없음, send로 응답하고 있기 때문
});

module.exports = router;