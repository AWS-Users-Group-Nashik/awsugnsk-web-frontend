<template>
  <div>
    <h2>Learnings</h2>
    <Learning v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Learning from "../components/Learning.vue";
export default {
  name: "Learnings",
  components: { Learning },
};
</script>

<style>
</style>