<template>
	<div>
		<h2 id="title">FOOTBAG DISCIPLINES</h2>
		<div>
			<div
				v-for="(discipline, index) in disciplines"
				:key="discipline"
				class="discipline"
				:class="index % 2 == 0 ? 'discipline-odd' : 'discipline-even'"
				:id="discipline.anchor"
			>
				<div>
					<img v-if="(singleColumnView === true || index % 2 == 0)" class="discipline-icon" :src="getIconPath(discipline.iconName, index)" />
				</div>
				<div>
					<h3 class="discipline-name">{{discipline.title}}</h3>
					<p>{{discipline.description}}</p>
					<img :src="discipline.gifPath" style="width:100%" />
				</div>
				<div>
					<img v-if="(singleColumnView === false && index % 2 == 1)" class="discipline-icon" :src="getIconPath(discipline.iconName, index)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			windowWidth: window.innerWidth,
			disciplines: [
				{
					anchor: "hackysack",
					title: "HACKY SACK",
					iconName: "HackySack",
					description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
					gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif"
				},
				{
					anchor: "freestyle",
					title: "FREESTYLE FOOTBAG",
					iconName: "Freestyle",
					description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
					gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif"
				},
				{
					anchor: "net",
					title: "FOOTBAG NET",
					iconName: "Net",
					description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
					gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif"
				},
				{
					title: "TWO/FOUR SQUARE",
					iconName: "TwoSquare",
					description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
					gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif"
				},
				{
					title: "FOOTBAG GOLF",
					iconName: "Golf",
					description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
					gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif"
				}
			]
		}
	},

	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	},

	computed: {
		singleColumnView() {
			return this.windowWidth <= 750;
		}
	},

	methods: {
		getIconPath(iconName, index) {
			const iconColor = (index % 2 === 0) ? 'White' : 'Green';

			return `images/Icon_${iconName}_${iconColor}.svg`
		}
	}
}
</script>

<style scoped>
#title {
	text-align: center;
	font-weight: 900;
	padding-top: 1rem;
}

.discipline {
	padding: 3rem 5rem;
	display: grid;
	grid-template-columns: .75fr 1fr .75fr;
	justify-items: center;
}

.discipline-odd {
	background-color:var(--color-secondary-light);
}

.discipline-icon {
	border-radius: 50%;
	height: 200px;
	width: 200px;
}

.discipline-name {
	color: var(--color-secondary)
}

@media (max-width: 750px) {
  .discipline {
    grid-template-columns: 1fr;
	padding: 3rem;
	text-align: center;
  }

  .discipline, .discipline-odd, .discipline-even {
	text-align: center;
  }
}

@media (min-width: 750px) {
	.discipline-odd {
		text-align: left;
	}

	.discipline-even {
		text-align: right;
	}
}
</style>
