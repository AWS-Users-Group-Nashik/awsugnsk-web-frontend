<template>
	<div>
		<div class="center grid container">
			<vs-row justify="space-around">
				<vs-col
					:key="member.id"
					v-for="member in members"
					vs-type="flex"
					vs-justify="center"
					vs-align="center"
          lg="3"
          sm="6"
          xs="12"
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
				tagline: "Still react>",
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
	},
}
</script>

<style>
.container {
	margin-top: 6rem;
}
</style>
