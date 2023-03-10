import './events-page.css';
import locationIcon from '../../assets/images/icons/location.svg';
import videosIcon from '../../assets/images/icons/videos.svg';
import resultsIcon from '../../assets/images/icons/results.svg';
import { events } from '../../data/events/events-data';

function EventsPage() {
	return (
		<>
			<div id="events-header">
				<h1 id="events-title">EVENTS</h1>
				this page has something about how footbag events are run and some kind of contact form for sponsors to use
			</div>
			<div id="events-container">
			{ events.map((event, index) => 
				<div 
					key={`event_${index}`}
					className={ `event ${index % 2 == 0 ? 'event-odd' : ''}` }
				>
					<div className="event-logo-container">
						<img src={event.imagePath} className="event-logo" />
					</div>
					<h3>{event.title}</h3>
					<div className="event-icon-container">
						<div>
							<img src={locationIcon} width="25" height="25" />
						</div>
						<div>
							<img src={videosIcon} width="25" height="25" />
						</div>
						<div>
							<img src={resultsIcon} width="25" height="25" />
						</div>
						<div>
							<span>{event.location}</span>
						</div>
						<div>
						{event.videoLink
							? <a className="event-link" href={event.videoLink} target="_blank">Video</a>
							: <span>Coming Soon</span>
						}
						</div>
						<div>
						{event.resultsLink
							? <a className="event-link" href={event.resultsLink} target="_blank">Results</a>
							: <span>Coming Soon</span>
						}
						</div>
					</div>
				</div>
			)}
			</div>
		</>
	);
}

export default EventsPage;
