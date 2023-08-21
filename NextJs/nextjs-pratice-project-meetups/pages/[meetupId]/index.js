import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail'

// our-domain.com/[meetupid]
const MeetupDetails = (props) => {
    return (
    <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description}/>
        </Head>
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    </Fragment>);
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

    const client = await MongoClient.connect('mongodb+srv://ragnar-next-learn:1234qwer@clusternextlearn.hcwwwir.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false, // 지원하는 매개변수 값이 모두 있는지 혹은 일부만 있는지를 알려 줌, false가 모두 있다는 의미
        // 실제 서비스라면 api등을 통해 동적으로 배열을 생성하도록 지정
        paths: meetups.map(meetup => ({ params: {meetupId: meetup._id.toString() }}))
    }
};

export const getStaticProps = async (context) => {
    
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://ragnar-next-learn:1234qwer@clusternextlearn.hcwwwir.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ 
        _id: new ObjectId(meetupId)
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
};

export default MeetupDetails;