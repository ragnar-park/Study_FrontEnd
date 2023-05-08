// node.js는 전역으로 노출하는 특성이 있어서 행하는 모든 파일에서 require키워드 사용 가능
// 자동으로 .js 붙음
// 경로를 생랴하면 글로벌 모듈을 찾게 됨
const http = require('http');
const express = require('express');
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

const app = express();

// const server = http.createServer(routes.handler);
const server = http.createServer(app);

// node.js가 스크립트를 바료 죵료 하지 않고 계속 실행되면서 듣도록 한다. 
// 루핑 프로세스 시작
server.listen(3000); 
