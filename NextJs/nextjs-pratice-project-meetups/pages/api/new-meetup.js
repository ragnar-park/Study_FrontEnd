import { response } from "express";
import { MongoClient } from "mongodb"; 

// API 라우트는 클라이언트가 아닌 서버 사이드에서만 실행이 가능함으로 
// 이 안에 있는 코드는 클라이언트에게 노출되지 않음
// 따라서 API 라우트에서는 유출 걱정 없이 크리덴셜을 사용할 수 있음
// /api/new-meetup에 요청이 전송되었을 떄에 트리거됨

const handler = async (req, res) => {
    // req: request 객체에는 헤더와 요청 본문이 들어감, method를 이용해 req.method를 실행할 수도 있음
    // res: response 객체는 응답을 다시 전송할 때에 필요함

    // 어떤 요청이 전송되었는지 알 수 있음
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://ragnar-next-learn:1234qwer@clusternextlearn.hcwwwir.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!'}); // 201 반환과 송출되는 응답에 JSON 데이터를 추가
    }
};

export default handler;