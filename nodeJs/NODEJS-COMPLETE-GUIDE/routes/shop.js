const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'shop.html')); // 절대 경로로 지정해야함
    // 운영 체제의 절대 경로를 이 프로젝트 폴더로 고정해 주는 Node.js 의 전역 변수
    // console.log('In another middleware!');
    // res.send('<h1>Hello from Express!</h1>'); // 기본 응답 헤더는 text/html 
    // // next()를 호출 하지 않음에도 더 이상 요청 실패가 없음, send로 응답하고 있기 때문
});

module.exports = router;