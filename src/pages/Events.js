import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext';
import EventDetaisl from "../components/EventDetails"
function Events() {
    const { events } = useContext(GlobalContext);
    return (
        <div className=''>
            {events.map((item) => (
                <EventDetaisl item={item} key={item.id} />
            ))}

        </div>
    )
}

export default Events