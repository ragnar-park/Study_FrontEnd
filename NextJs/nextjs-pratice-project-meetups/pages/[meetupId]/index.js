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

export default MeetupDetails;