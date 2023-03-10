import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './header.css';

function Header() {
	return (
		<nav>
			<div id="header-container">
				<Link to="/">
					<img id="logo-image" src={logo} width="300" height="35"/>
				</Link>

				{/* <div id="menu-options">
					<Link to="/">NEW PLAYERS</Link>
					<Link to="/styles">GAMES</Link>
					<Link to="/sponsors">SPONSORS</Link>
					<Link to="/"><i id="email-icon" className="fa-regular fa-envelope"></i></Link>
				</div> */}
			</div>
		</nav>
	);
}

export default Header;
