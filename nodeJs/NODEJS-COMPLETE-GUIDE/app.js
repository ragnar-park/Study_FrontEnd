
/* express */
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// 미들웨어 등록
// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next();
// });

// app.use('/',(req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

// 요청 본문 분석 미들웨어
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">제출</button></form>'); 
    // next(); 하나의 요청만 보낼 수 있다. 
});

app.use('/product',(req,res, next) => {
    console.log(req.body)
    // bodyParser.urlencoded을 미들웨어 등록을 하지 않으면 undifind이다. 
    // req가 본문에 편의 속성을 주지만 기본적으로 req는 들어오는 요청의 본문을분석하려 하지 않기 때문이다.
    // 따라서 분석기를 등록 해줘야 한다.
    
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // 기본 응답 헤더는 text/html 
    // next()를 호출 하지 않음에도 더 이상 요청 실패가 없음, send로 응답하고 있기 때문
});

// express에서 내부적으로 동일한 작업을 수행
// const server = http.createServer(app);
// server.listen(3000); 
app.listen(3000);



/* only node.js */
// node.js는 전역으로 노출하는 특성이 있어서 행하는 모든 파일에서 require키워드 사용 가능
// 자동으로 .js 붙음
// 경로를 생략하면 글로벌 모듈을 찾게 됨
// const http = require('http');

// const routes = require('./routes');


// const rqListener = (req, res) => {

// }

// 서버에 요청이 들어올 때 마다노트가 익명 함수를 실행 -> node.js 주된 이벤트 드리븐 아키텍처
// const server = http.createServer((req, res) => {
    
//     // const url =  req.url;
//     // const method = req.method;
//     routes.requestHandler(req,res);
// });
// console.log(routes.someText);


// const server = http.createServer(routes.handler);

// node.js가 스크립트를 바료 죵료 하지 않고 계속 실행되면서 듣도록 한다. 
// 루핑 프로세스 시작
// server.listen(3000); 
