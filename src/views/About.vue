<template>
	<div class="container">
		<div class="center grid about-us">
			<vs-row vs-w="12">
				<vs-col
					justify="center"
					align="center"
					lg="12"
					sm="12"
					xs="10"
					:offset="windowWidth <= 480 ? '2' : null"
				>
					<h3>About Us</h3>
				</vs-col>
				<vs-col
					justify="center"
					align="center"
					lg="12"
					sm="12"
					xs="10"
					:offset="windowWidth <= 480 ? '2' : null"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						ultricies venenatis ante in faucibus. Praesent lobortis, massa et
						placerat molestie, eros massa consectetur ipsum, id facilisis est
						nibh auctor magna. In hac habitasse platea dictumst. Proin
						scelerisque commodo sapien et posuere.
					</p>
				</vs-col>
			</vs-row>
		</div>
		<div class="center grid member-cards">
			<vs-row vs-w="12">
				<vs-col
					:key="member.id"
					v-for="member in members"
					justify="center"
					align="center"
					lg="3"
					sm="6"
					xs="10"
					:offset="windowWidth <= 480 ? '2' : null"
				>
					<Member :member="member" />
				</vs-col>
			</vs-row>
		</div>
	</div>
</template>

<script>
import Member from '../components/Member.vue'
export default {
	name: 'About',
	components: { Member },
	data: () => ({
		members: [],
		windowWidth: null,
	}),
	created() {
		this.members = [
			{
				id: 1,
				name: 'Abhishek Wagh',
				profilePic: '#',
				linkedin: '#',
				twitter: '#',
				tagline: 'To the moon',
			},
			{
				id: 2,
				name: 'Yash Garudkar',
				profilePic: '#',
				linkedin: '#',
				twitter: '#',
				tagline: 'Still react>',
			},
			{
				id: 3,
				name: 'Yash Karande',
				profilePic: '#',
				linkedin: '#',
				twitter: '#',
				tagline:
					"I'll be in my room, making no noise and pretending I'm not there (but, coding)",
			},
			{
				id: 4,
				name: 'Pushkar Thakur',
				profilePic: '#',
				linkedin: '#',
				twitter: '#',
				tagline: 'The north remembers...',
			},
		]
		this.windowWidth = window.innerWidth
	},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	},
	unmounted() {
		window.removeEventListener('resize')
	},
}
</script>

<style>
.container {
	margin-top: 6rem;
}

.about-us {
	margin: auto;
	max-width: 60rem;
}

.about-us h3 {
	text-align: center;
	font-size: 2.5rem;
}

.about-us p {
	font-size: 1rem;
}

.member-cards {
	margin-top: 3rem;
}
</style>
