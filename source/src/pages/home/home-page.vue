<script setup>
import HeroSection from "./sections/hero-section.vue";
import IntroSection from "./sections/intro-section.vue";
import MoreInfoSection from "./sections/more-info-section.vue";
</script>

<template>
	<div>
		<hero-section  />
		<intro-section class="home-page-section" />
		<more-info-section class="home-page-section" />
  </div>
</template>

<script>
export default {
	components: {
		HeroSection,
		IntroSection,
		MoreInfoSection
	}
}
</script>

<style scoped>
.home-page-section {
	margin-bottom: 5%;
}
</style>
