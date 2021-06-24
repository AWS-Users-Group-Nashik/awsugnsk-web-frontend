<template>
	<vs-card type="5">
		<template #title>
			<h3>{{member.name}}</h3>
		</template>
		<template #img>
			<img
				src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
				alt="member_photo"
			/>
		</template>
		<template #text>
			<p>
				{{member.tagline}}
			</p>
		</template>
		<template #interactions>
			<vs-button danger icon>
				<i class="bx bxl-linkedin"></i>
			</vs-button>
			<!-- <vs-button class="btn-chat" shadow primary>
				<i class="bx bx-chat"></i>
				<span class="span">
					54
				</span>
			</vs-button> -->
		</template>
	</vs-card>
</template>

<script>
export default {
	name: 'Member',
	props: {
		member: Object
	},
}
</script>

<style></style>
