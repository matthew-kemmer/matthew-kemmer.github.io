import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home/home-page.vue";
import DisciplinesPage from "@/pages/disciplines/disciplines-page.vue";
import CommunityPage from "@/pages/community/community-page.vue";
import SponsorsPage from "@/pages/sponsors/sponsors-page.vue";
import PublicEventsPage from "@/pages/events/events-page_public.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			alias: "/home",
			component: HomePage,
		},
		{
			path: "/styles",
			component: DisciplinesPage,
		},
		{
			path: "/community",
			component: CommunityPage,
		},
		{
			path: "/events",
			component: PublicEventsPage,
		},
		{
			path: "/sponsors",
			component: SponsorsPage,
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if(to.hash) {
			return { el: to.hash, behavior: 'smooth' }
		} else {
       		return { top: 0, behavior: 'smooth' }
		}
	},
});

export default router;
