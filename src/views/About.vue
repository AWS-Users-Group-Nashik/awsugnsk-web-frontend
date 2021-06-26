<template>
	<div class="about-container container">
		<h2 class="page-heading">About</h2>
		<div class="center grid about-us">
			<vs-row vs-w="12">
				<vs-col justify="center" align="center" lg="12" sm="12" xs="12">
					<p>
						Welcome!<br />
						Amazon Web Services User Group (UG) Nashik is a place for developers
						that share the common interest of building with AWS. Here we will
						share content relevant to AWS UG Nashik, all the talks hosted at AWS
						UG Nashik, resources to learn the AWS products and a lot of exciting
						stuff.<br />
						Make sure you are subscribed to the newsletter for staying updated
						with upcoming talks and events.
					</p>
				</vs-col>
			</vs-row>
		</div>
		<div class="center grid member-cards">
			<vs-row vs-w="12">
				<vs-col align="start" justify="center">
					<h2>Leader</h2>
				</vs-col>
				<vs-col align="start" justify="center">
					<Member :member="leader" />
				</vs-col>
				<vs-col align="start" justify="center">
					<h2>Core Team Members</h2>
				</vs-col>
				<vs-col
					:key="member.id"
					v-for="member in coreMembers"
					justify="center"
					align="space-around"
					lg="4"
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
import Member from '@/components/Member.vue'
import ApiService from '@/common/api.service'
export default {
	name: 'About',
	components: { Member },
	data() {
		return {
			leader: null,
			coreMembers: [],
			windowWidth: null,
		}
	},
	created() {
		ApiService.get('/members/').then((response) => {
			response.data.forEach((member) => {
				if (member.member_type === 'LEAD') {
					this.leader = member
				} else if (member.member_type === 'CORE') {
					this.coreMembers.push(member)
				}
			})
		})
	},
	mounted() {
		this.windowWidth = window.innerWidth
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
.about-container {
	margin-top: 4rem;
}

.about-us h3 {
	text-align: center;
	font-size: 2.5rem;
}

.about-us p {
	font-size: 1rem;
	text-align: justify;
}

.member-cards {
	margin-top: 1rem;
}

@media screen and (max-width: 768px) {
	.about-us {
		margin: 5vw;
	}

	.member-cards {
		margin-left: 5vw;
	}
}
</style>
