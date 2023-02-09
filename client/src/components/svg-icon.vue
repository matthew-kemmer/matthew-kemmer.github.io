<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<use :href="path"></use>
	</svg>
</template>

<script>
export default {
	props: {
		path: String
	}
}
</script>

<style scoped>
:host {
	display: inline-block;
	height: 16px;
	width: 16px;

	vertical-align: middle;
}

:host([small]) {
	height: 12px;
	width: 12px;
}

:host([medium]) {
	height: 24px;
	width: 24px;
}

:host([large]) {
	height: 32px;
	width: 32px;
}

svg {
	display: block;
	pointer-events: none;
	height: 100%;
	width: 100%;
}
</style>
