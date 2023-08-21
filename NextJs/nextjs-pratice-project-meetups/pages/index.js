// our-domain.com/
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

export const getStaticProps = async () => {
// 클라이언트 사이드에서 실행 되지 않음
// 빌드 빌드프로세스 중에만 실행되는 코드 
// 서버와 방문자인 클라이언트 사이드에서 실행되지 않으니 방문자의 기기 내에서 코드가 실행될 일이 없음
// 클라이언트에서 서버 사이드로 데이터를 가져올 수 있음 + 더 정확히는 프로세스 사이드에서 가져올 수 있는 방법

// fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },

        // 증분 정적 생성 사용 - 배포(프로더션 빌드) 후에도  페이지가 주기에 따라 업데이트 되도록 설정
        // 설정된 숫자만큼 빌드 프로세스 중 대기한 뒤 해당 페이지가 생성됨 , 생성은 되지만 바로 생성되지 않음
        // 요청이 있을시 최소 10초마다 해당 페이지가 재생성됨
        revaildate: 10, // 매 시간마다 데이터가 바뀌면 3600, 항상 바뀐다면 1
    }

};

export default HomePage;