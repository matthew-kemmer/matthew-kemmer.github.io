import { Link } from "react-router-dom";
import './intro-section.css';
import { footbagGames } from "./intro-data";
import ButtonLink from "../../../../components/button-link/button-link";

function IntroSection() {
	return (
		<div className="intro-container home-page-section">
			<h1 className="intro-header">FOOTBAG | RECREATIONAL AND COMPETITIVE SPORTS</h1>
			<p className="footbag-description">
					Footbag is a series of sports where players use their feet to kick
					a small bag in a variety of styles that range from light and casual to complex
					and competitive. Footbag is played all over the world, bonding together a dedicated
					community around their love for a unique and amazing sport.
			</p>

			<div id="footbag-games-container">
			  { footbagGames.map((footbagGame, index) => 
				<div key={`footbag-game_${index}`}>
					<div className="footbag-game">
						<Link to={footbagGame.route}>
							<img src={footbagGame.imagePath} className="footbag-game-icon" width="200" height="200" />
						</Link>
						<h3>{footbagGame.title}</h3>
						<div>{footbagGame.description}</div>
					</div>
          <ButtonLink label='MORE' route={footbagGame.route} />
				</div>
			  )}
			</div>
		</div>
	);
}

export default IntroSection;
