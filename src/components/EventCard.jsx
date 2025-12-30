import { FaMapMarkerAlt, FaCalendar, FaRupeeSign, FaUsers } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const progress = (event.filled / event.volunteersNeeded) * 100;

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <span className="event-category">{event.category}</span>
      </div>
      
      <div className="event-content">
        <h3>{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="detail">
            <FaCalendar className="icon" />
            <span>{event.date} | {event.time}</span>
          </div>
          <div className="detail">
            <FaMapMarkerAlt className="icon" />
            <span>{event.location}</span>
          </div>
          <div className="detail">
            <FaRupeeSign className="icon" />
            <span>{event.payment}</span>
          </div>
        </div>
        
        <div className="volunteer-progress">
          <div className="progress-label">
            <FaUsers className="icon" />
            <span>Volunteers: {event.filled}/{event.volunteersNeeded}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="event-actions">
          <a 
            href={event.formLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apply-button"
          >
            Apply via Google Form
          </a>
          <button className="details-button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;