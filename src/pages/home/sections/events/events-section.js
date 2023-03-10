import './events-section.css';
import { events } from '../../../../data/events/events-data';
import ButtonLink from '../../../../components/button-link/button-link';

function EventsSectionEvent(event) {
  return (
    <div className="events-section-event">
      <div className="event-logo-container">
        <img src={event.imagePath} className="event-logo" />
      </div>
      <h3>{event.title}</h3>
      <strong>{event.location}</strong>
    </div>
  );
}

function EventsSection() {
  return (
    <div className="home-page-section events-section">
      <h2 className="events-section-header">EVENTS</h2>
      <div id="events-section-events-container">
        <div>
          <h3 className="events-section-subheader"><strong>UPCOMING EVENTS</strong></h3>
          {EventsSectionEvent(events[0])}
        </div>
        <div id="events-section-divider"></div>
        <div>
          <h3 className="events-section-subheader"><strong>PAST EVENTS</strong></h3>
          <div id="events-section-past-events-container">
            {EventsSectionEvent(events[1])}
            {EventsSectionEvent(events[2])}
          </div>
        </div>
      </div>
      <ButtonLink label="MORE" route="/events" />
    </div>
  );
}

export default EventsSection;
