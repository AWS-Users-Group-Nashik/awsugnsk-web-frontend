<template>
	<div class="navbar">
		<div class="center desktop-navbar">
			<vs-navbar :color="active" center-collapsed v-model="active">
				<template #left>
					<vs-navbar-item to="home" :active="active === 'secondary'" id="home">
						AWSUG-NSK
					</vs-navbar-item>
				</template>
				<template #right>
					<vs-navbar-item to="/home" :active="active == 'home'" id="home">
						Home
					</vs-navbar-item>
					<vs-navbar-item
						to="/learning-paths"
						:active="active == 'success'"
						id="success"
					>
						Learning Paths
					</vs-navbar-item>
					<vs-navbar-item to="/events" :active="active == 'events'" id="events">
						Events
					</vs-navbar-item>
					<vs-navbar-item to="/about" :active="active == 'about'" id="about">
						About
					</vs-navbar-item>
				</template>
			</vs-navbar>
		</div>
		<div class="hidden mobile-navbar">
			<vs-sidebar absolute reduce v-model="active" open>
				<template #logo>
					AWS
				</template>
				<vs-sidebar-item id="home" to="/home">
					<template #icon>
						<i class="bx bx-home"></i>
					</template>
					Home
				</vs-sidebar-item>
				<vs-sidebar-item id="learning-paths" to="/learning-paths">
					<template #icon>
						<i class="bx bx-brain"></i>
					</template>
					Learning Paths
				</vs-sidebar-item>
				<vs-sidebar-item id="events" to="/events">
					<template #icon>
						<i class="bx bx-calendar-heart"></i>
					</template>
					Events
				</vs-sidebar-item>
				<vs-sidebar-item id="about" to="/about">
					<template #icon>
						<i class="bx bx-info-circle"></i>
					</template>
					About
				</vs-sidebar-item>
			</vs-sidebar>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Nav',
	data: () => ({
		active: 'primary',
	}),
}
</script>

<style scoped>
@media screen and (min-width: 480px) {
	.mobile-navbar {
		display: none;
	}
}

@media screen and (max-width: 480px) {
	.desktop-navbar {
		display: none;
	}
}
</style>
