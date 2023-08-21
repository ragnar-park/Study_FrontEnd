import { Fragment } from "react"
import MeetupDetail from '../../components/meetups/MeetupDetail'

// our-domain.com/[meetupid]
const MeetupDetails = () => {
    return (<MeetupDetail 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5, Soxme City"
        description="This is a first meetup"
    />);
};

// getStaticPaths는 pages 컴포넌트 파일에서 내보내야 하는 함수로,
// 동적 페이지이며 getStaticProps를 이용할 때 이 함수를 필요로 함
// 즉 getServerSideProps를 사용하거나 getStaticProps 또는 getServerSideProps를 사용하지 않는다면 필요 없음
// getStaticProps를 사용할 때만 이 함수가 요구됨

export const getStaticPaths = async () =>{
    // getStaticProps가 있으면 페이지가 빌드 프로세스 중 사전 생성됨
    // 이 말은 곧 NextJs가 페이지가 지원하는 모든 Id에 대해 사전에 해당 동적 페이지의 모든 버전을 사전 생성해야 한다는 것임
    // 동적 페이지이기 때문에 어떤 id 값에 대한 페이지가 사전 생성되어야 하는지를 알아야 함 
    // 그렇지 않으면 해당 페이지를 사전 생성 할 수 없음, 사전 생성되지 않은 id를 URL에 입력한다면 404에러 
    return {
        fallback: false, // 지원하는 매개변수 값이 모두 있는지 혹은 일부만 있는지를 알려 줌, false가 모두 있다는 의미
        // 실제 서비스라면 api등을 통해 동적으로 배열을 생성하도록 지정
        paths: [
            { 
                params: {
                    meetupId: 'm1',
                } 
            },
            { 
                params: {
                    meetupId: 'm2',
                } 
            }
        ]
    }
};

export const getStaticProps = async (context) => {
    
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jp',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Soxme City',
                description: 'This is a first meetup'
            }
        }
    }
};

export default MeetupDetails;