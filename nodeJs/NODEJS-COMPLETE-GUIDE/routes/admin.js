const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET 
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    // __dirname으로 파일의 경로를 읽음
    // 한 단계 올라가서 views로 들어감
    // add-product.html 서비스함

    // console.log('In another middleware!');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">제출</button></form>'); 
    // next(); 하나의 요청만 보낼 수 있다. 
});

router.post('/add-product',(req,res, next) => {
    console.log(req.body)
    // bodyParser.urlencoded을 미들웨어 등록을 하지 않으면 undifind이다. 
    // req가 본문에 편의 속성을 주지만 기본적으로 req는 들어오는 요청의 본문을분석하려 하지 않기 때문이다.
    // 따라서 분석기를 등록 해줘야 한다.
    
    res.redirect('/');
});

module.exports = router;