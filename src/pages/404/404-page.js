import './404-page.css';
import notFoundLogo from '../../assets/images/footbag-games/icon_hackysack_green.svg';
import { ButtonLink } from '../../components/links/link-components';


function NotFoundPage() {
  return (
    <div id="not-found-page">
      <img id="not-found-image" src={notFoundLogo} />
      <p><strong>Oooops!</strong></p>
      <p>This page doesn't exist.</p>
      <ButtonLink label="BACK TO HOME" route="/" />
    </div>
  );
}

export default NotFoundPage;
