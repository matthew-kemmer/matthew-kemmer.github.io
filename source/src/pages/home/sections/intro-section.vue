<template>
	<div class="intro-container">
		<h2 class="intro-header">FOOTBAG | RECREATIONAL AND COMPETITIVE SPORTS</h2>
		<p class="footbag-description">
				Footbag is a series of sports where players use their feet to kick
				a small bag in a variety of styles that range from light and casual to complex
				and competitive. Footbag is played all over the world, bonding together a dedicated
				community around their love for a unique and amazing sport.
		</p>

		<div id="styles-container">
			<div
				v-for="style in styles"
				:key="style"
			>				
				<div class="style-container">
					<router-link :to="getLink(style)">
						<img :src="style.imagePath" class="style-icon" width="200" height="200" />
					</router-link>
					<h3>{{style.title}}</h3>
					<div>{{style.description}}</div>
				</div>
				<button class="pill-button button">
					<router-link :to="getLink(style)"><strong class="button-text">MORE</strong></router-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import HackySackIcon from '@/assets/images/icon_hackysack_white.svg';
import FreestyleIcon from '@/assets/images/icon_freestyle_white.svg';
import NetIcon from '@/assets/images/icon_net_white.svg';

export default {
	data() {
		return {
			styles: [
				{
					title: "HACKY SACK",
					imagePath: HackySackIcon,
					description: "Hacky sack is the original and most well-known footbag game. Fun and easy to pick-up; grab a bag with some friends, and keep it off the ground together.",
					linkHash: "hackysack"
				},
				{
					title: "FREESTYLE FOOTBAG",
					imagePath: FreestyleIcon,
					description: "Freestyle footbag is a fast-paced, creative, and technical sport centered about doing tricks with a footbag and your legs. Great for exercising the body and the mind.",
					linkHash: "freestyle"
				},
				{
					title: "FOOTBAG NET",
					imagePath: NetIcon,
					description: "Footbag net is an acrobatic sport played over a net and using only your feet. Play solo or with a partner for an intense competitive experience.",
					linkHash: "net"
				}
			]
		}
	},

	methods: {
		getLink(style) {
			return `/styles#${style.linkHash}`;
		}
	}
}
</script>

<style scoped>
.intro-container {
	background-color: var(--color-secondary-light);
	text-align: center;
}

.intro-header {
	color: var(--color-secondary);
	padding-top: 2em;
}

.button {
	color: black;
	background-color: var(--color-secondary);
}

.button-text {
	color: black;
}

#styles-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1rem;
	margin: 2em;
	padding-bottom: 2em;
}

.style-container {
	margin-bottom: 1em;
	min-height: 350px;
}

.footbag-description {
	font-size: medium;
	margin: 2em 4em 4em 4em;
}

.style-icon {
	border-radius: 50%;
}
</style>
