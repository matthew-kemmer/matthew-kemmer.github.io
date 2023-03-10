import { Link } from "react-router-dom";
import './link-components.css';

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

function ImageLink(props) {
  const route = props.route;
  const src = props.src;
  const id = props.id;
  const className = props.className;
  const height = props.height;
  const width = props.width;

  return (
    <Link to={route}>
      <img id={id} src={src} className={className} width={width} height={height} />
    </Link>
  );
}

export { ButtonLink, ImageLink };
