import logo from '../../assets/images/logo.svg';
import './header.css';
import { ImageLink } from '../../components/links/link-components.js';

function Header() {
	return (
		<nav>
			<div id="header-container">
        <ImageLink id="logo-image" src={logo} route="/" width="300" height="35" />
			</div>
		</nav>
	);
}

export default Header;
