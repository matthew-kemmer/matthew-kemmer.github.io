<script setup>
import { Location } from "../../../shared/models/location";
import { LocationType } from "../../../shared/enums/locationType";
</script>

<template>
	<div>
		
		<div v-if="isPhysical">
			<p>City: {{location.city}}</p>
			<p>State: {{location.state}}</p>
			<p>Postal Code: {{location.postalCode}}</p>
			<p>Country: {{location.country}}</p>
		</div>

		<div v-if="isOnline">
			<p>Description: {{location.description}}</p>
			<p>URL: <a :href="location.url">{{location.url}}</a></p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			location: Location
		},

		computed: {
			isPhysical() {
				return this.location.type === LocationType.Physical;
			},

			isOnline() {
				return this.location.type === LocationType.Online;
			}
		}
	}
</script>
