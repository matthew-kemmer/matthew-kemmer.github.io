<script setup>
import Header from "@/pages/header/header.vue";
import Footer from "@/pages/footer/footer.vue";
</script>

<template>
	<div>
		<Header />
		<router-view id="page-content" />
		<Footer />
	</div>
</template>

<script>
export default {
	components: {
		Header,
		Footer
	}
}
</script>
