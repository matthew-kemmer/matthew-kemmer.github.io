<template>
	<div id="more-info-section" >
		<div
			v-for="(moreInfoElement, index) in moreInfoElements"
			:key="moreInfoElement"
			class="more-info-container"
			:class="index > 0 ? 'more-info-container-right' : ''"
		>
			<router-link :to="moreInfoElement.link">
				<img class="more-info-icon" :src="moreInfoElement.svg" />
			</router-link>
			<div></div>
			<button class="pill-button button">
				<router-link :to="moreInfoElement.link"><strong class="button-text">{{moreInfoElement.title}}</strong></router-link>
			</button>
			<p class="more-info-body">{{moreInfoElement.body}}</p>
		</div>
	</div>
</template>

<script>
import ThumbIcon from '@/assets/images/thumb.svg';
import CalendarIcon from '@/assets/images/calendar.svg';

export default {
	data() {
		return {
			moreInfoElements: [
				{
					title: "JOIN THE COMMUNITY",
					body: "Find information on how to start playing, find equipment, and connect with other players.",
					svg: ThumbIcon,
					link: '/community'
				},
				{
					title: "EVENTS",
					body: "Find information on hosting and attending footbag events.",
					svg: CalendarIcon,
					link: '/events'
				}
			]
		}
	}
}
</script>

<style scoped>
#more-info-section {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	text-align: center;
}

.more-info-icon {
	height: 85px;
}

.button {
	background-color: var(--color-primary);
	margin-top: 1em;
}

.button-text {
	color: var(--color-secondary);
}

.more-info-container {
	padding-top: 3em;
}

@media(min-width: 906px) {
	.more-info-container-right {
		border-left: 1px solid #333;
	}
}

.more-info-body {
	margin: 2em 5em;
}
</style>
