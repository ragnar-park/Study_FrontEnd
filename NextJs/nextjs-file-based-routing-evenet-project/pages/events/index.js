import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';


const AllEvenetsPage = () => {
    const router = useRouter();

    const events = getAllEvents();
    const findEventsHandle = (year, month) => {
        const fullPath = `/events/${year}/${month}`; // 슬러그 페이지 이동

        router.push(fullPath);
    }

    return(
        <Fragment>
            <EventSearch onSearch={findEventsHandle}/>
            <EventList items={events}/>
        </Fragment>
    )
};

export default AllEvenetsPage;