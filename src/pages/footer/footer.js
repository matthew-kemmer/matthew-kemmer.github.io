import './footer.css';
import ifpaLogo from '../../assets/images/icons/ifpa-logo.svg';

function Footer() {
	return (
		<footer>
			<div id="footer-container">
				<div>
					{/* <h3 id="contact-header">CONTACT</h3> */}
					<a className="footer-link contact-link" href="mailto:a@b.com">
            <img src={ifpaLogo} className="ifpa-logo" />
          </a>
				</div>

				<div id="social-container">
					{/* <h3 id="follow-us-header">FOLLOW US</h3> */}
					<span>
						<a href="https://www.instagram.com/footbag_official/" target="_blank"><i className="footer-link social fa-brands fa-instagram fa-xl"></i></a>
						<a href="https://www.facebook.com/footbag.org/" target="_blank"><i className="footer-link social fa-brands fa-facebook-square fa-xl"></i></a>
						<a href="https://www.youtube.com/channel/UCs3hULDHOVOknWExWBVlLBw" target="_blank"><i className="footer-link social fa-brands fa-youtube fa-xl"></i></a>
						{/* <a href="https://discord.com/invite/DAtQwG4" target="_blank"><i className="footer-link social fa-brands fa-discord fa-xl"></i></a> */}
					</span>
				</div>

				<div id="donate-container">
					{/* <h3>DONATE</h3> */}
					<a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated" target="_blank"><i className="footer-link fa-brands fa-cc-paypal fa-2x"></i></a>
				</div>
			</div>

			<div className="copyright">
				Footbag.org 2023, International Footbag Players' Association, Inc. (a non-profit corporation)
			</div>
		</footer>
	);
}

export default Footer;
