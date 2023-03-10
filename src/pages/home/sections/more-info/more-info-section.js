import { Link } from "react-router-dom";
import './more-info-section.css';
import thumbIcon from '../../../../assets/images/icons/thumb.svg';
import calendarIcon from '../../../../assets/images/icons/calendar.svg';

const moreInfoElements = [
  {
    title: "EVENTS",
    body: "Find information on hosting and attending footbag events.",
    svg: calendarIcon,
    link: '/events'
  },
  {
    title: "ABOUT FOOTBAG",
    body: "Learn about the history of footbag and the organization that runs the sport.",
    svg: thumbIcon,
    link: '/about'
  }  
];

function MoreInfoSection() {
  return (
    <div id="more-info-section" className="home-page-section" >
    { moreInfoElements.map((moreInfoElement, index) =>
      <div
        className={`more-info-container ${index > 0 ? 'more-info-container-right' : ''}`}
        key={`more-info-element_${index}`}
      >
        <Link to={moreInfoElement.link}>
          <img className="more-info-icon" src={moreInfoElement.svg} />
        </Link>
        <div></div>
        <Link to={moreInfoElement.link}>
          <button className="pill-button more-info-button">
            <strong className="more-info-button-text">{moreInfoElement.title}</strong>
          </button>
        </Link>
        <p className="more-info-body">{moreInfoElement.body}</p>
      </div>
    )}
	  </div>
  );
}

export default MoreInfoSection;
