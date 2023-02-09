<template>
	<div id="events-header">
		<h2 id="events-title">EVENTS</h2>
		this page has something about how footbag events are run and some kind of contact form for sponsors to use
	</div>
	<div id="events-container">
		<div
			v-for="(event, index) in events"
			:key="event"
			class="event"
			:class="index % 2 == 0 ? 'event-odd' : ''"
		>
			<div class="logo-container">
				<img :src="event.imagePath" class="event-logo" />
			</div>
			<h3>{{event.title}}</h3>
			<div class="event-icon-container">
				<div>
					<img src="images/location.svg" width="25" height="25" />
				</div>
				<div>
					<img src="images/videos.svg" width="25" height="25" />
				</div>
				<div>
					<img src="images/results.svg" width="25" height="25" />
				</div>
				<div>
					<span>{{event.location}}</span>
				</div>
				<div>
					<a v-if="event.videoLink" :href="event.videoLink" target="_blank">Video</a>
					<span v-else>Coming Soon</span>				
				</div>
				<div>
					<a v-if="event.resultsLink" :href="event.resultsLink" target="_blank">Results</a>
					<span v-else>Coming Soon</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			events: [
				{
					title: "WFC 2023",
					location: "Medellin, COLOMBIA",
					imagePath: "images/wfc-logos/WFC2023.JPG"
				},
				{
					title: "WFC 2022",
					location: "Krakow, POLAND",
					resultsLink: "http://www.footbag.org/events/show/1646387871",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2022.png"
				},
				{
					title: "WFC 2021",
					location: "ONLINE",
					resultsLink: "http://www.footbag.org/events/show/1623054449",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2021.png"
				},
				{
					title: "WFC 2020",
					location: "ONLINE",
					resultsLink: "http://www.footbag.org/reference/-/IFPA_Online_Freestyle_Footbag_World_Championships_2020",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2020.png"
				},
				{
					title: "WFC 2019",
					location: "Warsaw, POLAND",
					resultsLink: "http://www.footbag.org/events/show/1547415984m",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2019.jpg"
				},
				{
					title: "WFC 2018",
					location: "Sofia, BULGARIA",
					resultsLink: "http://www.footbag.org/events/show/1519215398",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2018.jpg"
				},
				{
					title: "WFC 2017",
					location: "Portland, Oregon, USA",
					resultsLink: "http://www.footbag.org/events/show/1471686537",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2017.jpg"
				},
				{
					title: "WFC 2016",
					location: "Trnava, SLOVAKIA",
					resultsLink: "http://www.footbag.org/events/show/1449259560",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2016.png"
				},
				{
					title: "WFC 2015",
					location: "Copenhagen, DENMARK",
					resultsLink: "http://www.footbag.org/events/show/1417735560",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2015.jpg"
				},
				{
					title: "WFC 2014",
					location: "Paris, FRANCE",
					resultsLink: "http://www.footbag.org/events/show/1391189882",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2014.png"
				},
				{
					title: "WFC 2013",
					location: "Montreal, CANADA",
					resultsLink: "http://www.footbag.org/events/show/1361207019",
					videoLink: "https://www.google.com",
					imagePath: "images/wfc-logos/WFC2013.jpg"
				}
			]
		}
	}
}
</script>

<style scoped>
#events-header {
	margin: 40px 60px;
	text-align: center;
}

#events-title {
	font-weight: bold;
	color: var(--color-secondary);
}

#events-container {
	display: grid;	
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	text-align: center;
}

.event {
	padding: 3rem;
}

.event-odd {
	background-color: var(--color-secondary-light);
}

.event-icon-container {
	display: grid;
	grid-template-rows: repeat(2, 20px);
	grid-template-columns: repeat(3, 60px);
	justify-content: space-evenly;
	grid-row-gap: 1rem;
}

.logo-container {
	height: 150px;
	line-height: 150px;
}

.event-logo {
	max-height: 150px;
	max-width: 300px;
	margin: auto;
  	vertical-align: middle;
}

a {
	text-decoration: underline;
}
</style>
