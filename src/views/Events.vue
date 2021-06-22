<template>
  <div>
    <h2>Events</h2>
    <Event v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Event from "../components/Event.vue";
export default {
  name: "Events",
  components: { Event },
};
</script>

<style>
</style>