<script setup>
import SvgIcon from "@/components/svg-icon.vue";
</script>

<template>
	<footer>
		<div id="container">
			<div>
				<h3>CONTACT</h3>
				<a class="contact-link" href="mailto:a@b.com"><svg-icon class="ifpa-logo" path="images/icons.svg#ifpa-logo"></svg-icon></a>
			</div>

			<div>
				<h3>FOLLOW US</h3>
				<span>
					<a href="https://www.instagram.com/footbag_official/" target="_blank"><i class="social fa-brands fa-instagram fa-xl"></i></a>
					<a href="https://www.facebook.com/footbag.org/" target="_blank"><i class="social fa-brands fa-facebook-square fa-xl"></i></a>
					<a href="https://www.youtube.com/channel/UCs3hULDHOVOknWExWBVlLBw" target="_blank"><i class="social fa-brands fa-youtube fa-xl"></i></a>
					<a href="https://discord.com/invite/DAtQwG4" target="_blank"><i class="social fa-brands fa-discord fa-xl"></i></a>
				</span>
			</div>

			<div>
				<h3>DONATE</h3>
				<a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated" target="_blank"><i class="fa-brands fa-cc-paypal fa-2x"></i></a>
			</div>
		</div>

		<div class="copyright">
			Footbag.org 2022, International Footbag Players's Association, Inc. (a non-profit corporation)
		</div>
	</footer>
</template>

<script>
export default {
	components: {
		SvgIcon
	}
}
</script>

<style scoped>
#container {
	display: grid;	
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 3rem;
	text-align: center;
}

footer {
	background: var(--color-primary);
	color: white;
	padding: var(--space-l);
}

.social {
	margin-right: 10px;
}

.copyright {
	margin-top: var(--space-xl);
	color: var(--color-system);
	font-size: var(--font-size-m);
	text-align: center;
}

.contact-link {
	text-align: center;
	fill: white;
}

.ifpa-logo {
	height: 4rem;
}

a {
	color: white;
	text-decoration: none;
}
</style>
