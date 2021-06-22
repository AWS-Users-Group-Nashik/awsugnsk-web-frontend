<template>
  <div>
    <h2>About</h2>
    <Member v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Member from "../components/Member.vue";
export default {
  name: "About",
  components: { Member },
};
</script>

<style>
</style>