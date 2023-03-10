import { Link } from "react-router-dom";
import './button-link.css';

function ButtonLink(props) {
  const route = props.route;
  const label = props.label;

  return (
    <Link to={route}>
      <button className="button-link">
        <strong>{label}</strong>
      </button>
    </Link>
  );
}

export default ButtonLink;
