<template>
	<div class="center examplex">
		<vs-navbar class="navbar"  :color="active" center-collapsed v-model="active">
			<template #left>
				<!-- <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" /> -->
        <vs-navbar-item :active="active === 'secondary'" id="home">
					AWSUG-NSK
				</vs-navbar-item>
			</template>
			<template #right>
				<vs-navbar-item :active="active == 'home'" id="home">
					Home
				</vs-navbar-item>
				<vs-navbar-item :active="active == 'success'" id="success">
					Learning Paths
				</vs-navbar-item>
				<vs-navbar-item :active="active == 'events'" id="events">
					Events
				</vs-navbar-item>
				<vs-navbar-item :active="active == 'about'" id="about">
					About
				</vs-navbar-item>
			</template>
		</vs-navbar>
	</div>
</template>

<script>
export default {
	name: 'Nav',
  data: () => ({
    active: 'primary'
  })
}
</script>

<style>

.navbar {
  height: 4rem;
}

</style>
