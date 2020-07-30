import React from 'react';
import EventEntry from './EventEntry.jsx';

const EventsList = ({ events }) => {
  return (
    <div id="events-list">
      {(events.length > 0) ? (
        events.map((event, index) => <EventEntry key={index} info={event} />)
        ) : (
        <div> No results! </div>
      )}
    </div>
  )
};
export default EventsList;