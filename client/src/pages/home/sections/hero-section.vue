<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
</script>

<template>
	<div>
		<Carousel :wrap-around="true">
			<Slide v-for="video in videos" :key="video">
				<div class="video-container">
					<iframe
						class="hero-video"
						:class="video.class ? video.class : 'hero-video_default'"
						:src="getVideoLink(video)"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope;"
  					allowfullscreen
						loading="lazy"
					></iframe>
				</div>
			</Slide>

			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<script>
const VideoType = {
	Youtube: 1,
	Vimeo: 2
};

export default {
	components: {
    Carousel,
    Slide,
		Pagination
  },
	data() {
		return {
			videos: [
				{
					// worlds 2022
					type: VideoType.Youtube,
					id: 'SzroZ78NKQs',
					start: 15,
					class: "hero-video_worlds2022"
				},
				{
					// krystof maler slowmo
					type: VideoType.Youtube,
					id: "WUbrFjdPE6c",
					start: 6
				},
				{
					// worlds 2019 "last shred"
					type: VideoType.Youtube,
					id: "Igp9-OZ8HPQ",
					class: "hero-video_last-shred"
				}
			]
		}
	},

	methods: {
		getVideoLink(video) {
			switch(video.type) {
				case VideoType.Youtube: {
					return `https://www.youtube.com/embed/` +
						`${video.id}` +
						`?controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1&autoplay=1&mute=1&loop=1&disablekb=1` +
						`&playlist=${video.id}` +
						`${video.start ? '&start=' + video.start : ''}`
				}
				case VideoType.Vimeo: {
					return `https://player.vimeo.com/video/${video.id}?autoplay=1&loop=1&autopause=0`
				}
			}
		}
	}
}
</script>

<style>
.video-container {
	width: 100%;
	height: 100%;
	max-height: 600px;
	position: relative;
}

.hero-video {
	width: 100%;
	pointer-events: none;
}

.hero-video_default {
	aspect-ratio: 16 / 9;
	margin-top: -15%;
}

.hero-video_last-shred {
	aspect-ratio: 2.35 / 1;
}

.hero-video_worlds2022 {
	aspect-ratio: 16 / 9;
	margin-top: -10%;
}

.carousel__pagination-button {
	background-color: var(--color-system);
}

.carousel__pagination-button--active {
	background-color: var(--color-primary);
}
</style>
