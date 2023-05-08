const fs = require('fs');


const requestHandler = ((req, res) => {
    const url =  req.url;
    const method = req.method;
    if(url === '/' ) {
        res.write('<html>')
        res.write('<head><title>Hello First Page</title></head>')
        res.write('<body><h1>Message</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });

        // 파일이 완료될때 까지 코드의 다음 라인이 실행되지 않도록함
        req.on('end', ()=> {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();      
            });
            // 다른 유저들이 보내어 새로 유입되는 요청들도 파일 운영이 끝날때 까지 실행되지 않음
            // res.statusCode = 302;
            // res.setHeader('Location','/');
            // return res.end();
        });

    }

    res.setHeader('Content-Type','text/html'); // 새로운 헤더 설정
    res.write('<html>')
    res.write('<head><title>Hi First Page</title></head>')
    res.write('<body><h1>Hi is Node.js server</h1></body>')
    res.write('</html>')
    res.end();
}) ;

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module 생략 가능 
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
