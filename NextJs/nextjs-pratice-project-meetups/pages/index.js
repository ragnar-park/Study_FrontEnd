// our-domain.com/

/*
 pages 컴포넌트 파일에 임포트 할때 그것이 getServerSideProps, getStaticProps 에서만 쓰이면 
 임포트된 패키지는 클라이언트 사이드 번들에 포함되지 않는다
 즉 서버에서만 실행되는 코드를 임포할 수 있고 NextJs는 이를 감지하여 클라인트 사이드 번들에서 제외함
*/
import { MongoClient } from "mongodb";


import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a Second meetup!'
    },

];

const HomePage = (props) => {
    // getStaticProps 으로 인해 사용되지 않음
    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // },[]);

    return (
        <MeetupList meetups={props.meetups} />
    );
};

// export const getServerSideProps = async (context) => {
//     // 배포 후 상시 서버 상세 존재 
//     // 매 요청에 대해 반드시 실행됨
//     // getServerSideProps 함수 내에서 req와 res 객체를 참조하여 필요한 서버 측 처리를 수행하고, 
//     // 이후에 데이터를 페이지 컴포넌트의 props로 전달하고 있습니다.

//     // Node.js의 HTTP 요청(request)과 응답(response) 객체에 대한 참조
//     // req (Request): 이 객체는 클라이언트의 요청(request) 정보를 담고 있음. HTTP 요청에 대한 다양한 정보와 데이터를 읽을 수 있는 메서드와 속성이 포함
//     // res (Response): 이 객체는 서버의 응답(response)을 조작하는 데 사용. HTTP 응답에 대한 다양한 조작 및 설정을 할 수 있는 메서드와 속성이 포함
//     const req = context.req; 
//     const res = context.res; // 작업한 response를 반환하는 것이 아닌, pages(해당) 컴포넌트 함수의 props를 포함하고 있는 props 키의 객체를 반환


//     // fetch data from an API
//     return {
//         props: DUMMY_MEETUPS,
//     }

// };

export const getStaticProps = async () => {
// 클라이언트 사이드에서 실행 되지 않음
// 빌드 빌드프로세스 중에만 실행되는 코드 (빌드 타임에만 실행됨)
// 서버와 방문자인 클라이언트 사이드에서 실행되지 않으니 방문자의 기기 내에서 코드가 실행될 일이 없음
// 클라이언트에서 서버 사이드로 데이터를 가져올 수 있음 + 더 정확히는 프로세스 사이드에서 가져올 수 있는 방법

    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://ragnar-next-learn:1234qwer@clusternextlearn.hcwwwir.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray(); // 문서 배열을 받음

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },

        // 증분 정적 생성 사용 - 배포(프로더션 빌드) 후에도  페이지가 주기에 따라 업데이트 되도록 설정
        // 설정된 숫자만큼 빌드 프로세스 중 대기한 뒤 해당 페이지가 생성됨 , 생성은 되지만 바로 생성되지 않음
        // 요청이 있을시 최소 10초마다 해당 페이지가 재생성됨
        // revaildate: 10, // 매 시간마다 데이터가 바뀌면 3600, 항상 바뀐다면 1
    }

};

export default HomePage;