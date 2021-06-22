<template>
  <div>
    <h2>Home</h2>
    <Story v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Story from "../components/Story.vue";
export default {
  name: "Home",
  components: { Story },
};
</script>

<style>
</style>