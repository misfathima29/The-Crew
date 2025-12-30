import EventCard from './EventCard';

const EventGrid = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="no-events">
        <h3>No events found matching your filters</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="event-grid">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;