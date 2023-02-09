<template>
	<nav>
		<div id="container">
			<router-link to="/">
				<img id="logo" src="images/logo.svg" width="300" height="35"/>
			</router-link>

			<div id="menu-options">
				<router-link to="/">NEW PLAYERS</router-link>
				<router-link to="/styles">DISCIPLINES</router-link>
				<router-link to="/sponsors">SPONSORS</router-link>
				<router-link to="/"><i id="email-icon" class="fa-regular fa-envelope"></i></router-link>
				<!-- <Slide>
					<a id="home" href="#">
						<span>Home</span>
					</a>
				</Slide> -->
			</div>
		</div>
	</nav>
</template>

<script>
import SvgIcon from "@/components/svg-icon.vue";

export default {
	components: {
		SvgIcon
	}
}
</script>

<style scoped>
nav {
	background: var(--color-primary);
	color: white;
	align-items: center;
	padding: 2% 5%;
}

#container {
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
  align-content: space-between;
}

.logo {
	max-height: 45px;
	cursor: pointer;
	color: var(--color-secondary);
}

#menu-options a {
	padding-left: 20px;
	text-align: center;
	vertical-align: middle;
}

#email-icon {
	color: var(--color-secondary);
}

a {
	color: white;
	text-decoration: none;
}
</style>
