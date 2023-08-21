// our-domain.com/new-meetup

import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {   
        // 페이지를 제공하는 서버와 동일한 서버에서 호스팅 되는 내부 API로 절대 경로를 구성해서 요청을 동일한 서버에 보내되
        // 그 서버의 다른 경로로 보낼 수 있음
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
        router.push('/'); // 뒤로 가기 버튼으로 돌아갈 수 없게 하려면 . replace
    }
    
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}
        />
    );
}

export default NewMeetupPage;